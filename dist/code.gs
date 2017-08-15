function createNewForm() {
}
function importForm() {
}
function onOpen() {
}/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getMessages(category, _locale) {
    var locale = _locale ? _locale : Session.getActiveUserLocale();
    switch (locale) {
        case 'ja':
            return getMessages_ja(category);
        case 'en':
        default:
            return getMessages_en(category);
    }
}

function getMessages_en(category) {
    return {
        ui: {
            'create form': 'create form',
            'initialize sheet': 'initialize sheet',
            'validate sheet': 'validate sheet',
            'create new form': 'create new form',
            'form title': 'form title',
            'form generation canceled': 'form generation canceled',
            'new form': 'new form',
            'input source spreadsheet ID or URL (blank to use active spreadsheet)': 'input source spreadsheet ID or URL (blank to use active spreadsheet)',
            'invalid spreadsheet ID or URL': 'invalid spreadsheet ID or URL',
            'input sheet index': 'input sheet index',
            '(blank to use active sheet)': '(blank to use active sheet)',
            'invalid sheet index': 'invalid sheet index',
            'form generation succeed.': 'form generation succeed.',
            'form generation failed.': 'form generation failed.',
            'import form': 'import form',
            'input source form ID or URL': 'input source form ID or URL',
            'input target spreadsheet ID or URL (blank to use active spreadsheet)':'input target spreadsheet ID or URL (blank to use active spreadsheet)',
            'form import canceled': 'form import canceled',
            'invalid form ID or URL': 'invalid form ID or URL',
            'form import failed.': 'form import failed.',
            'form import succeed.': 'form import succeed.'
        }
    }[category];
}

function getMessages_ja(category) {
    return {
        ui: {
            'create form': 'フォーム生成',
            'initialize sheet': 'シートの初期化・読み込み',
            'validate sheet': 'シートの構造を検証する',
            'create new form': 'シート内容からフォームを生成する',
            'form title': 'フォームのタイトル',
            'form generation canceled': 'フォーム生成をキャンセルしました。',
            'new form': '新しいフォーム',
            'input source spreadsheet ID or URL (blank to use active spreadsheet)': 'スプレッドシートのIDまたはURLを入力\\n(空欄の入力でアクティブなスプレッドシートを指定)',
            'invalid spreadsheet ID or URL': '不正なIDまたはURLです',
            'input sheet index': '利用するシートのインデックスを数値で指定',
            '(blank to use active sheet)': 'または空欄でアクティブなシートを指定',
            'invalid sheet index': '不正なインデックスです',
            'form generation succeed.': 'フォーム生成に成功しました。',
            'form generation failed.': 'フォーム生成に失敗しました。',
            'import form': 'フォームの読み込み',
            'input source form ID or URL': 'フォームIDまたはURLを入力',
            'input target spreadsheet ID or URL (blank to use active spreadsheet)':'スプレッドシートのIDまたはURLを入力\\n(空欄の入力でアクティブなスプレッドシートを指定)',
            'form import canceled': 'フォームの読み込みをキャンセルしました。',
            'invalid form ID or URL':'不正なIDまたはURLです',
            'form import failed.': 'フォーム読み込みに失敗しました.',
            'form import succeed.': 'フォーム読み込みに成功しました.'

        }
    }[category];
}
module.exports = getMessages;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Browser, SpreadsheetApp */

var getMessages = __webpack_require__(0);
var Sheet2Form = __webpack_require__(7);

function createNewForm(){
  
  var messages = getMessages('ui');

  var inputBoxTitle = messages['create new form'];
  
  function inputFormTitle(){
    var step = '(Step 1 of 3)';
    var formTitle = Browser.inputBox(inputBoxTitle+step, messages['form title'], Browser.Buttons.OK_CANCEL);
    if(formTitle === 'cancel'){
      throw messages['form generation canceled'];
    }else if(formTitle === ''){
      return messages['new form'];
    }
    return formTitle;
  }
  
  function openSpreadsheet(){
    var step = '(Step 2 of 3)';
    var input = Browser.inputBox(inputBoxTitle+step, messages['input source spreadsheet ID or URL (blank to use active spreadsheet)'], Browser.Buttons.OK_CANCEL);
    if(input === 'cancel'){
      throw messages['form generation canceled'];
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
        throw messages['form generation canceled'];
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
  
  try{
    var formTitle = inputFormTitle();
    var sheet = openSheet(openSpreadsheet());
    var sheet2form = new Sheet2Form();
    var form = sheet2form.convert(sheet, formTitle, formOptions);  
    
    var file = DriveApp.getFileById(form.getId());
    file.setName(form.getTitle());
    
    Browser.msgBox(messages['form generation succeed.']+'\\n'+
                  'URL: \\n'+form.shortenFormUrl(form.getPublishedUrl()));
  }catch(exception){
    Logger.log(exception);
    if(exception.stack){
      Logger.log(exception.stack);
    }
    Browser.msgBox(messages['form generation failed.']+'\\n'+JSON.stringify(exception, null, ' '));
  }
}

module.exports = createNewForm;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Logger, Browser, SpreadsheetApp, FormApp */

var getMessages = __webpack_require__(0);
var Form2Json = __webpack_require__(5);
var Json2Sheet = __webpack_require__(6);

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

module.exports = importForm;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global SpreadsheetApp */
var getMessages = __webpack_require__(0);
function onOpen(event) {
    var ui = SpreadsheetApp.getUi();

    var messages = getMessages('ui');

    ui.createMenu(messages['create form'])
    //.addItem(messages['initialize sheet'], 'initializeSheet')
    //.addItem(messages['validate sheet'],'validateSheet')
        .addItem(messages['create new form'], 'createNewForm')
        .addItem(messages['import form'], 'importForm')
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global FormApp, FormApp.ItemType */

function Form2Json() {

    function choicesToJson(choice) {
        return Object_assign(Object_assign({
            value: choice.getValue()
        }, (choice.isCorrectAnswer())? {
            isCorrectAnswer: choice.isCorrectAnswer()
        } : {}),
            (choice.getPageNavigationType() !== null)? {
            pageNavigationType: pageNavigationTypeToString(choice.getPageNavigationType())
        } : {});
    }

    function userToJson(user) {
        return {
            email: user.getEmail()
        };
    }

    function blobToJson(blob) {
        return {
            name: blob.getName(),
            contentType: blob.getContentType(),
            dataAsString: blob.getDataAsString()
        };
    }

    function feedbackToJson(feedback) {
        if (feedback) {
            return {
                linkUrls: feedback.getLinkUrls(),
                text: feedback.getText()
            };
        } else {
            return null;
        }
    }

    function alignmentToString(alignment) {
        switch (alignment) {
            case FormApp.Alignment.LEFT:
                return 'LEFT';
            case FormApp.Alignment.RIGHT:
                return 'RIGHT';
            case FormApp.Alignment.CENTER:
                return 'CENTER';
            default:
                return 'INVALID_ALIGNMENT';
        }
    }

    function pageNavigationTypeToString(type) {
        switch (type) {
            case FormApp.PageNavigationType.CONTINUE:
                return 'CONTINUE';
            case FormApp.PageNavigationType.GO_TO_PAGE:
                return 'GO_TO_PAGE';
            case FormApp.PageNavigationType.RESTART:
                return 'RESTART';
            case FormApp.PageNavigationType.SUBMIT:
                return 'SUBMIT';
            default:
                return 'INVALID_NAVIGATION';
        }
    }

    function pageBreakToString(pageBreak) {
        if (pageBreak) {
            return {
                index: pageBreak.getIndex()
            };
        } else {
            return null;
        }
    }

    function convert(form) {
        var metadata = {
            isQuiz: form.isQuiz(),
            acceptingResponses: form.isAcceptingResponses(),
            publishingSummary: form.isPublishingSummary(),
            confirmationMessage: form.getConfirmationMessage(),
            customClosedFormMessage: form.getCustomClosedFormMessage(),
            description: form.getDescription(),
            editUrl: form.getEditUrl(),
            editors: form.getEditors().map(userToJson).map(function(user){return user.email;}).join(', '),
            id: form.getId(),
            publishedUrl: form.getPublishedUrl(),
            shuffleQuestions: form.getShuffleQuestions(),
            summaryUrl: form.getSummaryUrl(),
            title: form.getTitle()
        };

        try {
            metaedata.destinationId = form.getDestinationId();
            metaedata.destinationType = form.getDestinationType();
        } catch (ignore) {
        }

        return {
            metadata: metadata,
            items: form.getItems().map(itemToJson)
        };
    }

    var types = {
        CHECKBOX: FormApp.ItemType.CHECKBOX,
        CHECKBOX_GRID: FormApp.ItemType.CHECKBOX_GRID,
        DATE: FormApp.ItemType.DATE,
        DATETIME: FormApp.ItemType.DATETIME,
        DURATION: FormApp.ItemType.DURATION,
        GRID: FormApp.ItemType.GRID,
        IMAGE: FormApp.ItemType.IMAGE,
        LIST: FormApp.ItemType.LIST,
        MULTIPLE_CHOICE: FormApp.ItemType.MULTIPLE_CHOICE,
        PAGE_BREAK: FormApp.ItemType.PAGE_BREAK,
        PARAGRAPH_TEXT: FormApp.ItemType.PARAGRAPH_TEXT,
        SCALE: FormApp.ItemType.SCALE,
        SECTION_HEADER: FormApp.ItemType.SECTION_HEADER,
        TEXT: FormApp.ItemType.TEXT,
        TIME: FormApp.ItemType.TIME
    };

    var TYPE_NAMES_UPPER = {
        CHECKBOX: 'CHECKBOX',
        CHECKBOX_GRID: 'CHECKBOX_GRID',
        DATE: 'DATE',
        DATETIME: 'DATETIME',
        DURATION: 'DURATION',
        GRID: 'GRID',
        IMAGE: 'IMAGE',
        LIST: 'LIST',
        MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
        PAGE_BREAK: 'PAGE_BREAK',
        PARAGRAPH_TEXT: 'PARAGRAPH_TEXT',
        SCALE: 'SCALE',
        SECTION_HEADER: 'SECTION_HEADER',
        TEXT: 'TEXT',
        TIME: 'TIME'
    };

    var TYPE_NAMES = {
        CHECKBOX: 'checkbox',
        CHECKBOX_GRID: 'checkboxGrid',
        DATE: 'date',
        DATETIME: 'dateTime',
        DURATION: 'duration',
        GRID: 'grid',
        IMAGE: 'image',
        LIST: 'list',
        MULTIPLE_CHOICE: 'multipleChoice',
        PAGE_BREAK: 'pageBreak',
        PARAGRAPH_TEXT: 'paragraphText',
        SCALE: 'scale',
        SECTION_HEADER: 'sectionHeader',
        TEXT: 'text',
        TIME: 'time'
    };

    function getItemTypeName(item) {
        switch (item.getType()) {
            case FormApp.ItemType.CHECKBOX:
                return TYPE_NAMES.CHECKBOX;
            case FormApp.ItemType.CHECKBOX_GRID:
                return TYPE_NAMES.CHECKBOX_GRID;
            case FormApp.ItemType.DATE:
                return TYPE_NAMES.DATE;
            case FormApp.ItemType.DATETIME:
                return TYPE_NAMES.DATETIME;
            case FormApp.ItemType.TIME:
                return TYPE_NAMES.TIME;
            case FormApp.ItemType.DURATION:
                return TYPE_NAMES.DURATION;
            case FormApp.ItemType.GRID:
                return TYPE_NAMES.GRID;
            case FormApp.ItemType.LIST:
                return TYPE_NAMES.LIST;
            case FormApp.ItemType.MULTIPLE_CHOICE:
                return TYPE_NAMES.MULTIPLE_CHOICE;
            case FormApp.ItemType.PARAGRAPH_TEXT:
                return TYPE_NAMES.PARAGRAPH_TEXT;
            case FormApp.ItemType.SCALE:
                return TYPE_NAMES.SCALE;
            case FormApp.ItemType.IMAGE:
                return TYPE_NAMES.IMAGE;
            case FormApp.ItemType.TEXT:
                return TYPE_NAMES.TEXT;
            case FormApp.ItemType.PAGE_BREAK:
                return TYPE_NAMES.PAGE_BREAK;
            case FormApp.ItemType.SECTION_HEADER:
                return TYPE_NAMES.SECTION_HEADER;
            default:
                return 'unknown type:' + item.getType();
        }
    }

    function getTypedItem(item) {
        var typeName = getItemTypeName(item);
        return {
            checkbox: function (item) {
                return item.asCheckboxItem();
            },
            checkboxGrid: function (item) {
                return item.asCheckboxGridItem();
            },
            date: function (item) {
                return item.asDateItem();
            },
            datetime: function (item) {
                return item.asDateTimeItem();
            },
            time: function (item) {
                return item.asTimeItem();
            },
            duration: function (item) {
                return item.asDurationItem();
            },
            grid: function (item) {
                return item.asGridItem();
            },
            image: function (item) {
                return item.asImageItem();
            },
            list: function (item) {
                return item.asListItem();
            },
            multipleChoice: function (item) {
                return item.asMultipleChoiceItem();
            },
            pageBreak: function (item) {
                return item.asPageBreakItem();
            },
            paragraphText: function (item) {
                return item.asParagraphTextItem();
            },
            scale: function (item) {
                return item.asScaleItem();
            },
            sectionHeader: function (item) {
                return item.asSectionHeaderItem();
            },
            text: function (item) {
                return item.asTextItem();
            }
        }[typeName](item);
    }


    function Object_assign(a, b) {
        var ret = {};
        [a, b].forEach(function (k) {
            Object.keys(k).forEach(function (key) {
                ret[key] = k[key];
            });
        });
        return ret;
    }

    function createItem(item, func) {
        var params = {
            type: getItemTypeName(item),
            id: item.getId(),
            index: item.getIndex(),
            title: item.getTitle(),
            helpText: item.getHelpText()
        };
        if (func) {
            var typedItem = getTypedItem(item);
            return Object_assign(params, func(typedItem));
        } else {
            return params;
        }
    }

    function createQuestionnaireItem(item, func) {
        return createItem(item, function (typedItem) {
            var params = {
                isRequired: typedItem.isRequired()
            };
            if (func) {
                return Object_assign(params, func(typedItem));
            } else {
                return params;
            }
        });
    }

    function createQuestionnaireItemWithCorrectnessFeedback(item, func) {
        return createQuestionnaireItem(item, function (typedItem) {
            var params = {
                points: typedItem.getPoints(),
                feedbackForCorrect: feedbackToJson(typedItem.getFeedbackForCorrect()),
                feedbackForIncorrect: feedbackToJson(typedItem.getFeedbackForIncorrect())
            };
            if (func) {
                return Object_assign(params, func(typedItem));
            } else {

                return params;
            }
        });
    }

    function createQuestionnaireItemWithGeneralFeedback(item, func) {
        return createQuestionnaireItem(item, function (typedItem) {
            var params = {
                points: typedItem.getPoints(),
                generalFeedback: feedbackToJson(typedItem.getGeneralFeedback())
            };
            if (func) {
                return Object_assign(params, func(typedItem));
            } else {
                return params;
            }
        });
    }

    function itemToJson(item) {
        switch (item.getType()) {
            case FormApp.ItemType.CHECKBOX:
            case FormApp.ItemType.MULTIPLE_CHOICE:
                return createQuestionnaireItemWithCorrectnessFeedback(item, function (typedItem) {
                    return {
                        hasOtherOption: typedItem.hasOtherOption(),
                        choices: typedItem.getChoices().map(choicesToJson)
                    };
                });
            case FormApp.ItemType.DATE:
            case FormApp.ItemType.DATETIME:
                return createQuestionnaireItemWithGeneralFeedback(item, function (typedItem) {
                    return {
                        includesYear: typedItem.includesYear()
                    };
                });
            case FormApp.ItemType.TIME:
                return createQuestionnaireItemWithGeneralFeedback(item);

            case FormApp.ItemType.DURATION:
                return createQuestionnaireItemWithGeneralFeedback(item);

            case FormApp.ItemType.CHECKBOX_GRID:
            case FormApp.ItemType.GRID:
                return createQuestionnaireItem(item, function (typedItem) {
                    return {
                        rows: typedItem.getRows(),
                        columns: typedItem.getColumns()
                    };
                });

            case FormApp.ItemType.LIST:
                return createQuestionnaireItemWithCorrectnessFeedback(item, function (typedItem) {
                    return {
                        choices: typedItem.getChoices().map(choicesToJson)
                    };
                });

            case FormApp.ItemType.PARAGRAPH_TEXT:
                return createQuestionnaireItemWithGeneralFeedback(item, function (typedItem) {
                    return {
                        // validation: undefined
                    };
                });

            case FormApp.ItemType.SCALE:
                return createQuestionnaireItemWithGeneralFeedback(item, function (typedItem) {
                    return {
                        leftLabel: typedItem.getLeftLabel(),
                        lowerBound: typedItem.getLowerBound(),
                        rightLabel: typedItem.getRightLabel(),
                        upperBound: typedItem.getUpperBound()
                    };
                });

            case FormApp.ItemType.TEXT:
                return createQuestionnaireItemWithGeneralFeedback(item);

            case FormApp.ItemType.IMAGE:
                return createItem(item, function (typedItem) {
                    return {
                        image: blobToJson(typedItem.getImage()),
                        alignment: alignmentToString(typedItem.getAlignment()),
                        width: typedItem.getWidth()
                    };
                });

            case FormApp.ItemType.VIDEO:
                return createItem(item, function (typedItem) {
                    return {
                        videoUrl: undefined, //typedItem.getVideoUrl(),
                        alignment: alignmentToString(typedItem.getAlignment()),
                        width: typedItem.getWidth()
                    };
                });

            case FormApp.ItemType.PAGE_BREAK:
                return createItem(item, function (typedItem) {
                    return {
                        pageNavigationType: pageNavigationTypeToString(typedItem.getPageNavigationType()),
                        goToPage: pageBreakToString(typedItem.getGoToPage())
                    };
                });

            case FormApp.ItemType.SECTION_HEADER:
                return createItem(item);

            default:
                return {
                    type: 'unknown type'
                };
        }
    }

    return {
        convert: convert
    };
}
module.exports = Form2Json;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global FormApp, Logger */

function Json2Sheet() {

    function convert(json, sheet) {
        try {
            jsonToSheet(json, sheet);
        } catch (err) {
            Logger.log(JSON.stringify(err, null, ' '));
        }
    }

    function jsonToSheet(json, sheet) {
        valuesToSheet(jsonToValues(json), sheet);
    }

    function itemToRows(item){
        var rows = [];
        switch(item.type){
            case 'text':
            case 'paragraphText':
            case 'time':
            case 'duration':
                rows.push([item.type, item.title, item.helpText, item.isRequired]);
                break;
            case 'radio':
            case 'multipleChoice':
            case 'checkbox':
            case 'list':
                var row = [item.type, item.title, item.helpText, item.isRequired, item.hasOtherOption];
                if(item.points || item.feedbackForCorrect || item.feedbackForIncorrect){
                    if(item.points){
                        row.push(item.points);
                    }else{
                        row.push('');
                    }
                    if(item.feedbackForCorrect){
                        if(item.feedbackForCorrect.text) {
                            row.push(item.feedbackForCorrect.text);
                        }else{
                            row.push('#'); // FIXME
                        }
                    }else{
                        row.push('');
                    }
                    if(item.feedbackForCorrect){
                        if(item.feedbackForCorrect.text) {
                            row.push(item.feedbackForCorrect.text);
                        }else{
                            row.push('#'); // FIXME
                        }
                    }else{
                        row.push('');
                    }
                }
                rows.push(row);
                item.choices.map(function(choice){
                    var isCorrectAnswer = choice.isCorrectAnswer ? choice.isCorrectAnswer : '';
                    var pageNavigationType = choice.pageNavigationType ? choice.pageNavigationType : '';
                    return ['', choice.value, isCorrectAnswer, pageNavigationType];
                }).forEach(function(row){
                    rows.push(row);
                });
                break;
            case 'checkboxGrid':
            case 'grid':
                rows.push([item.type, item.title, item.helpText, item.isRequired]);
                var numRows = Math.max(item.rows.length, item.columns.length);
                for(var i = 0; i < numRows; i++){
                    var row = item.rows[i] ? item.rows[i] : '';
                    var col = item.columns[i] ? item.columns[i] : '';
                    rows.push(['', row, col]);
                }
                break;
            case 'scale':
                rows.push([item.type, item.title, item.helpText, item.isRequired, item.leftLabel, item.rightLabel, item.lowerBound, item.upperBound]);
                break;
            case 'date':
            case 'datetime':
                rows.push([item.type, item.title, item.helpText, item.isRequired, item.includesYear])
                break;
            case 'sectionHeader':
                rows.push([item.type, item.title, item.helpText]);
                break;
            case 'pageBreak':
                rows.push([item.type, item.title, item.helpText, '', item.pageNavigationType]);
                break;
            case 'image':
                rows.push([item.type, item.title, item.helpText, '', item.image, item.width, item.alignment]);
                break;
            case 'video':
                rows.push([item.type, item.title, item.helpText, '', item.videoURL, item.width, item.alignment]);
                break;
        }
        return rows;
    }

    /**
     与えられたitemsのJSONをもとに、スプレッドシートに書き込む2次元配列での値を生成する
     */
    function jsonToValues(json) {
        var rows = [];
        Object.keys(json.metadata).forEach(function(key){
            rows.push([key, json.metadata[key]]);
        });
        json.items.forEach(function(item){
            itemToRows(item).forEach(function(row){
                rows.push(row);
            });
        });
        
        return rows;
    }

    /**
     与えられた2次元配列の値をもとに、指定されたシートに対して、所与の文法でセルに値を設定していく
     */
    function valuesToSheet(values, sheet) {
        /*
        var lastRow = sheet.getLastRow();
        if(0 < values.length - lastRow){
            sheet.getRange(lastRow + 1, 1, values.length - lastRow, 7).setValues(values);
        }
        */
        sheet.clear();
        values.forEach(function(value){
            sheet.appendRow(value);
        });
    }

    return {
        convert: convert
    };
}
module.exports = Json2Sheet;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Logger */

function Sheet2Form() {

    var COL_INDEX = {
        COMMAND: 0,
        META: {
            EDIT_URL: 1,
            PUBLISHED_URL: 2,
            SUMMARY_URL: 3,

            VERSION: 1,
            TITLE: 1,
            DESCRIPTION: 1,
            MESSAGE: 1,
            BOOLEAN: 1
        },
        ITEM: {
            TITLE: 1,
            HELP_TEXT: 2,
            Q: {
                REQUIRED: 3,
                CHOICE: {
                    META: {
                        SHOW_OTHER_OPTION: 4,
                        POINTS: 5,
                        FEEDBACK_FOR_CORRECT: 6,
                        FEEDBACK_FOR_INCORRECT: 7
                    },
                    ITEM: {
                        LABEL: 1,
                        IS_CORRECT_ANSWER: 2,
                        NAVIGATION: 3
                    }
                },
                GRID: {
                    ITEM: {
                        ROW_LABEL: 1,
                        COL_LABEL: 2
                    }
                },
                SCALE: {
                    LEFT_LABEL: 4,
                    RIGHT_LABEL: 5,
                    LOWER_BOUND: 6,
                    UPPER_BOUND: 7
                },
                DATE: {
                    INCLUDES_YEAR: 4
                }
            },
            VIDEO: {
                NA: 3,
                URL: 4,
                WIDTH: 5,
                ALIGNMENT: 6
            },
            IMAGE: {
                NA: 3,
                URL: 4,
                WIDTH: 5,
                ALIGNMENT: 6
            },
            PAGE_BREAK: {
                NA: 3,
                PAGE_NAVIGATION_TYPE: 4,
                GO_TO_PAGE_TITLE: 4
            }
        },
        FEEDBACK: {
            ID: 1,
            TEXT_OR_URL: 2,
            DISPLAY_TEXT: 3
        }
    };

    var EMPTY_STRING = '';

    var ALIGNMENT = {
        'LEFT': FormApp.Alignment.LEFT,
        'CENTER': FormApp.Alignment.CENTER,
        'RIGHT': FormApp.Alignment.RIGHT
    };

    var PAGE_NAVIGATION_TYPE = {
        'CONTINUE': FormApp.PageNavigationType.CONTINUE,
        'GO_TO_PAGE': FormApp.PageNavigationType.GO_TO_PAGE,
        'RESTART': FormApp.PageNavigationType.RESTART,
        'SUBMIT': FormApp.PageNavigationType.SUBMIT
    };

    var booleanValue = function (value) {
        if (typeof value === 'boolean') {
            return value;
        } else if (typeof value === 'string') {
            return ! (value.toLowerCase() === 'false' || value === '0' || value === EMPTY_STRING);
        } else if (typeof value === 'number') {
            return (0 < value);
        }
        return false;
    };

    var callWithBooleanValue = function (value, callback) {
        var b = booleanValue(value);
        if (b) {
            callback(b);
        }
    };
    var callWithIntegerValue = function (value, callback) {
        var intValue = parseInt(value, 10);
        if (!isNaN(intValue)) {
            callback(intValue);
        }
    };

    var isNotNullValue = function (value) {
        return (value !== undefined && value !== null && value !== EMPTY_STRING);
    };

    var callWithNotNullValue = function (value, callback) {
        if (isNotNullValue(value)) {
            callback(value);
        }
    };

    const formMetadataHandlers = {
        form: function (context) {
            /*
            var editUrl = context.row[COL_INDEX.META.EDIT_URL];
            var publishedUrl = context.row[COL_INDEX.META.PUBLISHED_URL];
            var summaryUrl = context.row[COL_INDEX.META.SUMMARY_URL];
            */
            var range = context.sheet.getRange(context.rowIndex + 1, 1, 1, 1 + COL_INDEX.META.SUMMARY_URL);
            range.setValues([[
                'form',
                context.form.getEditUrl(),
                context.form.getPublishedUrl(),
                context.form.getSummaryUrl()
            ]]);
        },
        version: function (context) {
            context.version = context.row[COL_INDEX.META.VERSION];
            if (context.version !== '1') {
                throw "ERROR! Invalid Version: " + context.version;
            }
        },
        title: function (context) {
            context.form.setTitle(context.row[COL_INDEX.META.TITLE])
        },
        description: function (context) {
            context.form.setDescription(context.row[COL_INDEX.META.DESCRIPTION])
        },
        isQuiz: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setIsQuiz(value);
        },
        shuffleQuestions: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setShuffleQuestions(value);
        },
        acceptingResponses: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setAcceptingResponses(value);
        },
        allowResponseEdits: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setAllowResponseEdits(value);
        },
        collectEmail: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setCollectEmail(value);
        },
        limitOneResponsePerUser: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setLimitOneResponsePerUser(value);
        },
        progressBar: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setProgressBar(value);
        },
        publishingSummary: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setPublishingSummary(value);
        },
        requireLogin: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setRequireLogin(value);
        },
        showLinkToRespondAgain: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setShowLinkToRespondAgain(value);
        },
        confirmationMessage: function(context) {
            var confirmationMessage = context.row[COL_INDEX.META.MESSAGE];
            context.form.setConfirmationMessage(confirmationMessage);
        },
        customClosedFormMessage: function (context) {
            var customClosedFormMessage = context.row[COL_INDEX.META.MESSAGE];
            context.form.setCustomClosedFormMessage(customClosedFormMessage);
        },
        editors: function(context){
            var editors = context.row[COL_INDEX.META.MESSAGE].split(/,\s*/);
            context.form.addEditors(editors);
        },
        id: function(context){
            // do nothing
        },
        editUrl: function(context){
            // do nothing
        },
        publishedUrl: function(context){
            // do nothing
        },
        summaryUrl: function(context){
            // do nothing
        }
    };

    const itemModifiers = {
        itemMetadata: function (context) {
            callWithNotNullValue(context.row[COL_INDEX.ITEM.TITLE], function (value) {
                context.item.setTitle(value);
            });
            callWithNotNullValue(context.row[COL_INDEX.ITEM.HELP_TEXT], function (value) {
                context.item.setHelpText(value);
            });
        },
        questionMetadata: function (context) {
            callWithBooleanValue(context.row[COL_INDEX.ITEM.Q.REQUIRED], function (value) {
                context.item.setRequired(value);
            });
        },
        choices: function (context) {
            var itemList = [];
            for (var rowIndex = context.rowIndex + 1; rowIndex < context.rows; rowIndex++) {
                if (context.values[rowIndex][COL_INDEX.COMMAND] === EMPTY_STRING) {
                    itemList.push({
                        label: context.values[rowIndex][COL_INDEX.ITEM.Q.CHOICE.ITEM.LABEL],
                        isCorrectAnswer: context.values[rowIndex][COL_INDEX.ITEM.Q.CHOICE.ITEM.IS_CORRECT_ANSWER],
                        navigation: context.values[rowIndex][COL_INDEX.ITEM.Q.CHOICE.ITEM.NAVIGATION]
                    });
                } else {
                    context.rowIndex = rowIndex - 1;
                    break;
                }
            }
            var choices = itemList.map(function (item) {
                var pageNavigationValue = item.navigation;
                var pageNavigation = PAGE_NAVIGATION_TYPE[pageNavigationValue] || context.pageBreakItems[pageNavigationValue];
                if (pageNavigation) {
                    return context.item.createChoice(item.label, pageNavigation);
                } else if (item.isCorrectAnswer) {
                    return context.item.createChoice(item.label, item.isCorrectAnswer);
                } else {
                    return context.item.createChoice(item.label);
                }
            });
            context.item.setChoices(choices);
        },
        showOtherOption: function (context) {
            callWithBooleanValue(context.row[COL_INDEX.ITEM.Q.CHOICE.META.SHOW_OTHER_OPTION], function (value) {
                context.item.showOtherOption(value);
            });
        },
        quizMetadata: function (context) {
            callWithIntegerValue(context.row[COL_INDEX.ITEM.Q.CHOICE.META.POINTS], function (value) {
                context.item.setPoints(value);
            });
            callWithNotNullValue(context.row[COL_INDEX.ITEM.Q.CHOICE.META.FEEDBACK_FOR_CORRECT], function (value) {
                if (value.indexOf('#') !== 0) {
                    var feedback = FormApp.createFeedback();
                    setFeedbackContent(feedback, value);
                    context.item.setFeedbackForCorrect(feedback.build());
                } else {
                    context.feedbackForCorrect[value] = context.item;
                }
            });
            callWithNotNullValue(context.row[COL_INDEX.ITEM.Q.CHOICE.META.FEEDBACK_FOR_INCORRECT], function (value) {
                if (value.indexOf('#') !== 0) {
                    var feedback = FormApp.createFeedback();
                    setFeedbackContent(feedback, value);
                    context.item.setFeedbackForIncorrect(feedback.build());
                } else {
                    context.feedbackForIncorrect[value] = context.item;
                }
            });
        },
        includesYear: function (context) {
            callWithBooleanValue(context.row[COL_INDEX.ITEM.Q.DATE.INCLUDES_YEAR], function (value) {
                context.item.setIncludesYear(value);
            });
        }
    };

    const itemPreprocessor = {
        pageBreak: function (context) {
            context.item = context.form.addPageBreakItem();
            itemModifiers.itemMetadata(context);
            context.pageBreakItems[context.item.getTitle()] = context.item;
        }
    };

    var multipleChoiceHandler = function (context) {
        context.item = context.form.addMultipleChoiceItem();
        itemModifiers.choices(context);
        itemModifiers.itemMetadata(context);
        itemModifiers.questionMetadata(context);
        itemModifiers.showOtherOption(context);
        if (context.form.isQuiz()) {
            itemModifiers.quizMetadata(context);
        }
    };

    const itemHandlers = {
        radio: multipleChoiceHandler,

        multipleChoice: multipleChoiceHandler,

        checkbox: function (context) {
            context.item = context.form.addCheckboxItem();
            itemModifiers.choices(context);
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
            itemModifiers.showOtherOption(context);
            if (context.form.isQuiz()) {
                itemModifiers.quizMetadata(context);
            }
        },

        list: function (context) {
            context.item = context.form.addListItem();
            itemModifiers.choices(context);
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        checkboxGrid: function (context) {
            var rowList = [], colList = [];
            for (var rowIndex = context.rowIndex + 1; rowIndex < context.rows; rowIndex++) {
                if (context.values[rowIndex][COL_INDEX.COMMAND] === EMPTY_STRING) {
                    callWithNotNullValue(context.values[rowIndex][COL_INDEX.ITEM.Q.GRID.ITEM.ROW_LABEL], function (value) {
                        rowList.push(value);
                    });
                    callWithNotNullValue(context.values[rowIndex][COL_INDEX.ITEM.Q.GRID.ITEM.COL_LABEL], function (value) {
                        colList.push(value);
                    });
                } else {
                    context.rowIndex = rowIndex - 1;
                    break;
                }
            }
            context.item = context.form.addCheckboxGridItem();
            context.item.setRows(rowList).setColumns(colList);
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        grid: function (context) {
            var rowList = [], colList = [];
            for (var rowIndex = context.rowIndex + 1; rowIndex < context.rows; rowIndex++) {
                if (context.values[rowIndex][COL_INDEX.COMMAND] === EMPTY_STRING) {
                    callWithNotNullValue(context.values[rowIndex][COL_INDEX.ITEM.Q.GRID.ITEM.ROW_LABEL], function (value) {
                        rowList.push(value);
                    });
                    callWithNotNullValue(context.values[rowIndex][COL_INDEX.ITEM.Q.GRID.ITEM.COL_LABEL], function (value) {
                        colList.push(value);
                    });
                } else {
                    context.rowIndex = rowIndex - 1;
                    break;
                }
            }
            context.item = context.form.addGridItem();
            context.item.setRows(rowList).setColumns(colList);
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        time: function (context) {
            context.item = context.form.addTimeItem();
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        date: function (context) {
            context.item = context.form.addDateItem();
            itemModifiers.includesYear(context);
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        datetime: function (context) {
            context.item = context.form.addDateTimeItem();
            itemModifiers.includesYear(context);
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        text: function (context) {
            context.item = context.form.addTextItem();
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        paragraphText: function (context) {
            context.item = context.form.addParagraphTextItem();
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        duration: function (context) {
            context.item = context.form.addDurationItem();
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        scale: function (context) {
            context.item = context.form.addScaleItem();
            callWithNotNullValue(context.row[COL_INDEX.ITEM.Q.SCALE.LEFT_LABEL], function (left) {
                callWithNotNullValue(context.row[COL_INDEX.ITEM.Q.SCALE.RIGHT_LABEL], function (right) {
                    context.item.setLabels(left, right);
                });
            });
            callWithIntegerValue(context.row[COL_INDEX.ITEM.Q.SCALE.LOWER_BOUND], function (lower) {
                callWithIntegerValue(context.row[COL_INDEX.ITEM.Q.SCALE.UPPER_BOUND], function (upper) {
                    context.item.setBounds(lower, upper);
                });
            });
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
        },

        sectionHeader: function (context) {
            context.item = context.form.addSectionHeaderItem();
            itemModifiers.itemMetadata(context);
        },

        video: function (context) {
            context.item = context.form.addVideoItem();
            var videoUrl = context.row[COL_INDEX.ITEM.VIDEO.URL];//the YouTube URL or ID
            context.item.setVideoUrl(videoUrl);
            callWithIntegerValue(context.row[COL_INDEX.ITEM.VIDEO.WIDTH], function (value) {
                context.item.setWidth(value);
            });
            callWithNotNullValue(context.row[COL_INDEX.ITEM.VIDEO.ALIGNMENT], function (value) {
                var alignment = ALIGNMENT[value] || undefined;
                if (value) {
                    context.item.setAlignment(alignment);
                }
            });
            itemModifiers.itemMetadata(context);
        },

        image: function (context) {
            context.item = context.form.addImageItem();
            var image = UrlFetchApp.fetch(context.row[COL_INDEX.ITEM.IMAGE.URL]);
            context.item.setImage(image);
            callWithIntegerValue(context.row[COL_INDEX.ITEM.IMAGE.WIDTH], function (value) {
                context.item.setWidth(value);
            });
            callWithNotNullValue(context.row[COL_INDEX.ITEM.IMAGE.ALIGNMENT], function (value) {
                var alignment = ALIGNMENT[value] || undefined;
                if (value) {
                    context.item.setAlignment(alignment);
                }
            });
            itemModifiers.itemMetadata(context);
        },

        pageBreak: function (context) {
            var title = context.row[COL_INDEX.ITEM.TITLE];
            var goToPageTitle = context.row[COL_INDEX.ITEM.PAGE_BREAK.GO_TO_PAGE_TITLE];
            var pageBreakItem = context.pageBreakItems[title];
            var goToPageBreakItem = PAGE_NAVIGATION_TYPE[goToPageTitle] || context.pageBreakItems[goToPageTitle];
            var lastItemIndex = context.form.getItems().length - 1;
            context.form.moveItem(pageBreakItem.getIndex(), lastItemIndex);
            pageBreakItem.setGoToPage(goToPageBreakItem);
        },

        feedback: function (context) {
            var feedback = FormApp.createFeedback();
            for (var rowIndex = context.rowIndex; rowIndex < context.rows; rowIndex++) {
                var command = context.values[rowIndex][COL_INDEX.COMMAND];
                var feedbackDisplayTextOrUrl = context.values[rowIndex][COL_INDEX.FEEDBACK.TEXT_OR_URL];
                var feedbackDisplayText = context.values[rowIndex][COL_INDEX.FEEDBACK.DISPLAY_TEXT];
                if ((command === 'feedback' && rowIndex === context.rowIndex) || !isNotNullValue(command)) {
                    callWithNotNullValue(feedbackDisplayTextOrUrl, function (value) {
                        setFeedbackContent(feedback, value, feedbackDisplayText);
                    });
                } else {
                    context.rowIndex = rowIndex - 1;
                    break;
                }
            }
            var builtFeedback = feedback.build();
            callWithNotNullValue(context.row[COL_INDEX.FEEDBACK.ID], function (value) {
                if (context.feedbackForCorrect[value]) {
                    context.feedbackForCorrect[value].setFeedbackForCorrect(builtFeedback);
                }
                if (context.feedbackForIncorrect[value]) {
                    context.feedbackForIncorrect[value].setFeedbackForIncorrect(builtFeedback);
                }
            });
        }
    };

    function setFeedbackContent(feedback, value, displayText) {
        if (0 === value.indexOf('http')) {
            if (displayText) {
                feedback.addLink(value, displayText);
            } else {
                feedback.addLink(value);
            }
        } else {
            feedback.setText(value);
        }
    }

    function startState(context) {
        return addingPageBreakItemsState(context);
    }

    function addingPageBreakItemsState(context) {
        for (context.rowIndex = 0; context.rowIndex < context.rows; context.rowIndex++) {
            context.row = context.values[context.rowIndex];
            var command = context.row[COL_INDEX.COMMAND];
            if (command === 'pageBreak') {
                itemPreprocessor.pageBreak(context);
            }
        }
        return mainLoopState(context);
    }

    function mainLoopState(context) {
        for (context.rowIndex = 0; context.rowIndex < context.rows; context.rowIndex++) {
            Logger.log('row:' + context.rowIndex);
            context.row = context.values[context.rowIndex];
            var command = context.row[COL_INDEX.COMMAND];
            if (command === '') {
                break;
            } else if (formMetadataHandlers[command]) {
                formMetadataHandlers[command](context);
            } else if (itemHandlers[command]) {
                itemHandlers[command](context);
            } else {
                var errorMessage = 'ERROR in row #' + context.rowIndex + '\t' + context.row.join('\t');
                Logger.log(errorMessage);
                throw errorMessage;
            }
        }
        return endState(context);
    }

    function endState(context) {
        return context.form;
    }

    var convert = function (sheet, formTitle, formOptions) {
        var form = FormApp.create(formTitle);
        form.setAcceptingResponses(formOptions.acceptingResponses);
        form.setAllowResponseEdits(formOptions.allowResponseEdits);
        form.setCollectEmail(formOptions.collectEmail);
        form.setLimitOneResponsePerUser(formOptions.limitOneResponsePerUser);
        form.setProgressBar(formOptions.progressBar);
        form.setPublishingSummary(formOptions.publishingSummary);
        form.setRequireLogin(formOptions.requireLogin);
        form.setShowLinkToRespondAgain(formOptions.showLinkToRespondAgain);
        form.setShuffleQuestions(formOptions.shuffleQuestions);
        form.setIsQuiz(formOptions.isQuiz);
        /*
        form.setConfirmationMessage(formOptions.confirmationMessage);
        form.setCustomClosedFormMessage(formOptions.customClosedFormMessage);
        */
        var context = {
            editUrl: undefined,
            publishedUrl: undefined,
            summaryUrl: undefined,
            version: '1',
            form: form,
            sheet: sheet,
            cols: sheet.getLastColumn(),
            rows: sheet.getLastRow(),
            values: sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues(),
            rowIndex: 0,
            row: undefined,
            pageBreakItems: {},
            feedbackForCorrect: {},
            feedbackForIncorrect: {}
        };
        return startState(context);
    };

    return {
        convert: convert,
        headerCommands: formMetadataHandlers,
        itemCommands: itemHandlers
    };
}

module.exports = Sheet2Form;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.createNewForm = __webpack_require__(2);
global.importForm = __webpack_require__(3);
global.onOpen = __webpack_require__(4).onOpen;




/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);