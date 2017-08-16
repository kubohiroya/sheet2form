'use strict';
/* global Browser, SpreadsheetApp */

var getMessages = require('./messages');
var Sheet2Form = require('./sheet2form');
var messages = getMessages('ui');
var formOptions = {
    acceptingResponses: true,
    allowResponseEdits: true,
    collectEmail: true,
    limitOneResponsePerUser: true,
    progressBar: true,
    publishingSummary: true,
    requireLogin: true,
    showLinkToRespondAgain: true,
    shuffleQuestions: false,
    isQuiz: false

};

function exportFormWithDialog(){

  var inputBoxTitle = messages['export form'];
  
  function inputFormTitleWithDialog(){
    var step = '(Step 1 of 3)';
    var formTitle = Browser.inputBox(inputBoxTitle+step, messages['form title'], Browser.Buttons.OK_CANCEL);
    if(formTitle === 'cancel'){
      throw messages['form export canceled'];
    }else if(formTitle === ''){
      return messages['new form'];
    }
    return formTitle;
  }
  
  function openSpreadsheetWithDialog(){
    var step = '(Step 2 of 3)';
    var input = Browser.inputBox(inputBoxTitle+step, messages['input source spreadsheet ID or URL (blank to use active spreadsheet)'], Browser.Buttons.OK_CANCEL);
    if(input === 'cancel'){
      throw messages['form export canceled'];
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
      return openSpreadsheetWithDialog();
    }
    return spreadsheet;
  }
  
  function openSheetWithDialog(spreadsheet){
    var step = '(Step 3 of 3)';
    if(1 < spreadsheet.getSheets().length){
      var range = '0-'+(spreadsheet.getSheets().length - 1);
      var input = Browser.inputBox(inputBoxTitle+step, messages['input sheet index'] + ':' + range +'\\n'+
                                   messages['(blank to use active sheet)'], Browser.Buttons.OK_CANCEL);
      if(input === 'cancel'){
        throw messages['form export canceled'];
      }
      if(input === ''){
        return spreadsheet.getActiveSheet();
      }
      var sheetIndex = parseInt(input, 10);
      if(sheetIndex < 0 || spreadsheet.getSheets().length <= sheetIndex){
        Browser.msgBox(messages['invalid sheet index']+':'+input);
        return openSheetWithDialog(spreadsheet);
      }
      return spreadsheet.getSheets()[sheetIndex]
    }
    return spreadsheet.getActiveSheet();
  }

    try{
        var formTitle = inputFormTitleWithDialog();
        var sheet = openSheetWithDialog(openSpreadsheetWithDialog());
        var sheet2form = new Sheet2Form();
        var form = sheet2form.convert(sheet, formTitle, formOptions);

        var file = DriveApp.getFileById(form.getId());
        file.setName(form.getTitle());

        Browser.msgBox(messages['form export succeed.']+'\\n'+
            'URL: \\n'+form.shortenFormUrl(form.getPublishedUrl()));
    }catch(exception){
        Logger.log(exception);
        if(exception.stack){
            Logger.log(exception.stack);
        }
        Browser.msgBox(messages['form export failed.']+'\\n'+JSON.stringify(exception, null, ' '));
    }
}

function exportForm(){
    try{
        var sheet = SpreadsheetApp.getActiveSheet();
        var sheet2form = new Sheet2Form();
        var form = sheet2form.convert(sheet, undefined, formOptions);
        var file = DriveApp.getFileById(form.getId());
        file.setName(form.getTitle());
        Browser.msgBox(messages['form export succeed.']+'\\n'+
            'URL: \\n'+form.shortenFormUrl(form.getPublishedUrl()));
    }catch(exception){
        Logger.log(exception);
        if(exception.stack){
            Logger.log(exception.stack);
        }
        Browser.msgBox(messages['form export failed.']+'\\n'+JSON.stringify(exception, null, ' '));
    }
}

module.exports = {
    exportFormWithDialog: exportFormWithDialog,
    exportForm: exportForm
};