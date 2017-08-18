'use strict';
/* global SpreadsheetApp */
var getMessages = require('./messages');
function onOpen(event) {
    var ui = SpreadsheetApp.getUi();

    var messages = getMessages('ui');

    ui.createMenu(messages['sheet2form'])
        .addItem(messages['export form'], 'exportForm')
        .addItem(messages['export form']+'...', 'exportFormWithDialog')
        .addItem(messages['import form'], 'importForm')
        .addItem(messages['import form']+'...', 'importFormWithDialog')
        .addToUi();
}
module.exports = {
    onOpen: onOpen
};
/*
function onEdit(event){
  var ss = event.source.getActiveSheet();
  var r = event.source.getActiveRange();
  //r.getColumn() == 
  if(event.value == 'bbb'){
    //r.setBackground('#aaffaa');
  }else{
    //r.setBackground('#ffaaaa');
  }
}
*/
/*
var hideHeaderRows = false;
function toggleHeader(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var context = {
    cols: sheet.getLastColumn(),
    rows: sheet.getLastRow(),
    values: sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues(),
    rowIndex: 0,
    row: undefined
  };
  
  var sheet2form = new Sheet2Form();
  var headerCommands = sheet2form.headerCommands;

  var start = 0, length = 0;
  for(var rowIndex = 0; rowIndex < context.rows; rowIndex++){
    var row = context.values[rowIndex];
    // var range = sheet.getRange(rowIndex+1, 1, 1, context.cols);
    var command = row[0];
    var isHeader = headerCommands[command];
    // Browser.msgBox(rowIndex+':'+command+':'+isHeader);
    if(isHeader !== undefined && ! hideHeaderRows){
      sheet.hideRows(rowIndex+1);
    }else{
      sheet.showRows(rowIndex+1);
    }
  }
  sheet.hideSheet();
  hideHeaderRows = ! sheet.isSheetHidden();
}
*/
