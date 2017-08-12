'use strict';
/* global Logger, Browser, SpreadsheetApp, FormApp */

function importForm(){
  
  var messages = getMessages('ui');

  var inputBoxTitle = messages['import form'];

  function openForm(){
    var step = '(Step 1 of 3)';
    var input = Browser.inputBox(inputBoxTitle+step, messages['input source form ID or URL'], Browser.Buttons.OK_CANCEL);
    if(input === 'cancel'){
      throw messages['form import canceled'];
    }
    var form = null;
    if(input === ''){
      form = FormApp.getActiveForm();
    }else if(0 < input.indexOf('/')){
      form = FormApp.openByUrl(input);
    }else{
      form = FormApp.openById(input);
    }
    if(! form){
      Browser.msgBox(messages['invalid form ID or URL']+': '+input);
      return importForm();
    }
    return form;
  }

    function openSpreadsheet(){
        var step = '(Step 2 of 3)';
        var input = Browser.inputBox(inputBoxTitle+step, messages['input target spreadsheet ID or URL (blank to use active spreadsheet)'], Browser.Buttons.OK_CANCEL);
        if(input === 'cancel'){
            throw messages['form import canceled'];
        }
        var spreadsheet = null;
        if(input === ''){
            spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        }else if(0 < input.indexOf('/')){
            spreadsheet = SpreadsheetApp.openByUrl(input);
        }else{
            spreadsheet = SpreadsheetApp.openById(input);
        }
        if(! spreadsheet){
            Browser.msgBox(messages['invalid spreadsheet ID or URL']+': '+input);
            return openSpreadsheet();
        }
        return spreadsheet;
    }

    function openSheet(spreadsheet){
        var step = '(Step 3 of 3)';
        if(1 < spreadsheet.getSheets().length){
            var range = '0-'+(spreadsheet.getSheets().length - 1);
            var input = Browser.inputBox(inputBoxTitle+step, messages['input sheet index'] + ':' + range +'\\n'+
                messages['(blank to use active sheet)'], Browser.Buttons.OK_CANCEL);
            if(input === 'cancel'){
                throw messages['form import canceled'];
            }
            if(input === ''){
                return spreadsheet.getActiveSheet();
            }
            var sheetIndex = parseInt(input, 10);
            if(sheetIndex < 0 || spreadsheet.getSheets().length <= sheetIndex){
                Browser.msgBox(messages['invalid sheet index']+':'+input);
                return openSheet(spreadsheet);
            }
            return spreadsheet.getSheets()[sheetIndex]
        }
        return spreadsheet.getActiveSheet();
    }

    try{

        var form = openForm();
        var sheet = openSheet(openSpreadsheet());

        var json = new Form2Json().convert(form);
        Logger.log(JSON.stringify(json, null, ' '));
        new Json2Sheet().convert(json, sheet);
    
        Browser.msgBox(messages['form import succeed.']);
  }catch(exception){
    Logger.log(exception);
    if(exception.stack){
      Logger.log(exception.stack);
    }
    Browser.msgBox(messages['form import failed.']+'\\n'+JSON.stringify(exception, null, ' '));
  }
}

