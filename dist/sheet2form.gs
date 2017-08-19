function exportForm() {
}
function importForm() {
}
function exportFormWithDialog() {
}
function importFormWithDialog() {
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
            'sheet2form': 'sheet2form',
            'export form': 'export form',
            'initialize sheet': 'initialize sheet',
            'validate sheet': 'validate sheet',
            'export form from sheet': 'export form from sheet',
            'form title': 'form title',
            'form export canceled': 'form export canceled',
            'new form': 'new form',
            'input source spreadsheet ID or URL (blank to use active spreadsheet)': 'input source spreadsheet ID or URL (blank to use active spreadsheet)',
            'invalid spreadsheet ID or URL': 'invalid spreadsheet ID or URL',
            'input sheet index': 'input sheet index',
            '(blank to use active sheet)': '(blank to use active sheet)',
            'invalid sheet index': 'invalid sheet index',
            'form export succeed.': 'form export succeed.',
            'form export failed.': 'form export failed.',
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
            'sheet2form': 'sheet2form',
            'export form': 'フォームの書き出し',
            'initialize sheet': 'シートの初期化・読み込み',
            'validate sheet': 'シートの構造を検証する',
            'export form from sheet': 'シート内容からフォームを生成する',
            'form title': 'フォームのタイトル',
            'form export canceled': 'フォーム生成をキャンセルしました。',
            'new form': '新しいフォーム',
            'input source spreadsheet ID or URL (blank to use active spreadsheet)': 'スプレッドシートのIDまたはURLを入力\\n(空欄の入力でアクティブなスプレッドシートを指定)',
            'invalid spreadsheet ID or URL': '不正なIDまたはURLです',
            'input sheet index': '利用するシートのインデックスを数値で指定',
            '(blank to use active sheet)': 'または空欄でアクティブなシートを指定',
            'invalid sheet index': '不正なインデックスです',
            'form export succeed.': 'フォーム生成に成功しました。',
            'form export failed.': 'フォーム生成に失敗しました。',
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

/* global Browser, SpreadsheetApp, Logger */

var getMessages = __webpack_require__(0);
var Sheet2Form = __webpack_require__(7);
var messages = getMessages('ui');

function exportFormWithDialog() {

    var inputBoxTitle = messages['export form'];

    function inputFormTitleWithDialog() {
        var step = '(Step 1 of 3)';
        var formTitle = Browser.inputBox(inputBoxTitle + step, messages['form title'], Browser.Buttons.OK_CANCEL);
        if (formTitle === 'cancel') {
            throw messages['form export canceled'];
        } else if (formTitle === '') {
            return messages['new form'];
        }
        return formTitle;
    }

    function openSpreadsheetWithDialog() {
        var step = '(Step 2 of 3)';
        var input = Browser.inputBox(inputBoxTitle + step, messages['input source spreadsheet ID or URL (blank to use active spreadsheet)'], Browser.Buttons.OK_CANCEL);
        if (input === 'cancel') {
            throw messages['form export canceled'];
        }
        var spreadsheet = null;
        if (input === '') {
            spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        } else if (0 < input.indexOf('/')) {
            spreadsheet = SpreadsheetApp.openByUrl(input);
        } else {
            spreadsheet = SpreadsheetApp.openById(input);
        }
        if (!spreadsheet) {
            Browser.msgBox(messages['invalid spreadsheet ID or URL'] + ': ' + input);
            return openSpreadsheetWithDialog();
        }
        return spreadsheet;
    }

    function openSheetWithDialog(spreadsheet) {
        var step = '(Step 3 of 3)';
        if (1 < spreadsheet.getSheets().length) {
            var range = '0-' + (spreadsheet.getSheets().length - 1);
            var input = Browser.inputBox(inputBoxTitle + step, messages['input sheet index'] + ':' + range + '\\n' +
                messages['(blank to use active sheet)'], Browser.Buttons.OK_CANCEL);
            if (input === 'cancel') {
                throw messages['form export canceled'];
            }
            if (input === '') {
                return spreadsheet.getActiveSheet();
            }
            var sheetIndex = parseInt(input, 10);
            if (sheetIndex < 0 || spreadsheet.getSheets().length <= sheetIndex) {
                Browser.msgBox(messages['invalid sheet index'] + ':' + input);
                return openSheetWithDialog(spreadsheet);
            }
            return spreadsheet.getSheets()[sheetIndex]
        }
        return spreadsheet.getActiveSheet();
    }

    try {
        var formTitle = inputFormTitleWithDialog();
        var sheet = openSheetWithDialog(openSpreadsheetWithDialog());
        var sheet2form = new Sheet2Form();
        var form = sheet2form.convert(sheet, formTitle);

        var file = DriveApp.getFileById(form.getId());
        file.setName(form.getTitle());

        Browser.msgBox(messages['form export succeed.'] + '\\n' +
            'URL: \\n' + form.shortenFormUrl(form.getPublishedUrl()));
    } catch (exception) {
        Logger.log(exception);
        if (exception.stack) {
            Logger.log(exception.stack);
        }
        Browser.msgBox(messages['form export failed.'] + '\\n' + JSON.stringify(exception, null, ' '));
    }
}

function exportForm() {
    try {
        var sheet = SpreadsheetApp.getActiveSheet();
        var sheet2form = new Sheet2Form();
        var form = sheet2form.convert(sheet, undefined);
        var file = DriveApp.getFileById(form.getId());
        file.setName(form.getTitle());
        Browser.msgBox(messages['form export succeed.'] + '\\n' +
            'URL: \\n' + form.shortenFormUrl(form.getPublishedUrl()));
    } catch (exception) {
        Logger.log(exception);
        if (exception.stack) {
            Logger.log(exception.stack);
        }
        Browser.msgBox(messages['form export failed.'] + '\\n' + JSON.stringify(exception, null, ' '));
    }
}

module.exports = {
    exportFormWithDialog: exportFormWithDialog,
    exportForm: exportForm
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Logger, Browser, SpreadsheetApp, FormApp */

var getMessages = __webpack_require__(0);
var Form2Json = __webpack_require__(5);
var Json2Sheet = __webpack_require__(6);
var messages = getMessages('ui');

function importFormWithDialog() {
    var inputBoxTitle = messages['import form'];

    function importFormDialog() {
        var step = '(Step 1 of 3)';
        var input = Browser.inputBox(inputBoxTitle + step, messages['input source form ID or URL'], Browser.Buttons.OK_CANCEL);
        if (input === 'cancel') {
            throw messages['form import canceled'];
        }
        var form = null;
        if (input === '') {
            form = FormApp.getActiveForm();
        } else if (0 < input.indexOf('/')) {
            form = FormApp.openByUrl(input);
        } else {
            form = FormApp.openById(input);
        }
        if (!form) {
            Browser.msgBox(messages['invalid form ID or URL'] + ': ' + input);
            return importFormDialog();
        }
        return form;
    }

    function openSpreadsheetDialog() {
        var step = '(Step 2 of 3)';
        var input = Browser.inputBox(inputBoxTitle + step, messages['input target spreadsheet ID or URL (blank to use active spreadsheet)'], Browser.Buttons.OK_CANCEL);
        if (input === 'cancel') {
            throw messages['form import canceled'];
        }
        var spreadsheet = null;
        if (input === '') {
            spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        } else if (0 < input.indexOf('/')) {
            spreadsheet = SpreadsheetApp.openByUrl(input);
        } else {
            spreadsheet = SpreadsheetApp.openById(input);
        }
        if (!spreadsheet) {
            Browser.msgBox(messages['invalid spreadsheet ID or URL'] + ': ' + input);
            return openSpreadsheetDialog();
        }
        return spreadsheet;
    }

    function openSheetDialog(spreadsheet) {
        var step = '(Step 3 of 3)';
        if (1 < spreadsheet.getSheets().length) {
            var range = '0-' + (spreadsheet.getSheets().length - 1);
            var input = Browser.inputBox(inputBoxTitle + step, messages['input sheet index'] + ':' + range + '\\n' +
                messages['(blank to use active sheet)'], Browser.Buttons.OK_CANCEL);
            if (input === 'cancel') {
                throw messages['form import canceled'];
            }
            if (input === '') {
                return spreadsheet.getActiveSheet();
            }
            var sheetIndex = parseInt(input, 10);
            if (sheetIndex < 0 || spreadsheet.getSheets().length <= sheetIndex) {
                Browser.msgBox(messages['invalid sheet index'] + ':' + input);
                return openSheet(spreadsheet);
            }
            return spreadsheet.getSheets()[sheetIndex]
        }
        return spreadsheet.getActiveSheet();
    }

    try {

        var form = importFormDialog();
        var sheet = openSheetDialog(openSpreadsheetDialog());
        var json = new Form2Json().convert(form);

        new Json2Sheet().convert(json, sheet);

        Browser.msgBox(messages['form import succeed.']);
    } catch (exception) {
        Logger.log(exception);
        if (exception.stack) {
            Logger.log(exception.stack);
        }
        Browser.msgBox(messages['form import failed.'] + '\\n' + JSON.stringify(exception, null, ' '));
    }
}

function importForm() {
    try {
        var sheet = SpreadsheetApp.getActiveSheet();
        var idRows = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues().filter(function (row) {
            return row[0] === 'id' && row[1] !== '';
        });
        if (idRows.length === 0) {
            throw '`id` row is not defined.';
        }
        var id = idRow[0][1];
        var form = FormApp.openById(id);
        var numItems = form.getItems().length;
        for (var index = numItems - 1; 0 <= index; index--) {
            form.deleteItem(index);
        }
        var json = new Form2Json().convert(form);

        new Json2Sheet().convert(json, sheet);

        Browser.msgBox(messages['form import succeed.']);
    } catch (exception) {
        Logger.log(exception);
        if (exception.stack) {
            Logger.log(exception.stack);
        }
        Browser.msgBox(messages['form import failed.'] + '\\n' + JSON.stringify(exception, null, ' '));
    }
}

module.exports = {
    importFormWithDialog: importFormWithDialog,
    importForm: importForm
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global SpreadsheetApp */
var getMessages = __webpack_require__(0);
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global FormApp, FormApp.ItemType */

function Form2Json() {

    /**
     * Convert a Google Form object into JSON Object.
     * @returns JSON object of form data
     * @param form {Form} a Google Form Object
     * */
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

    const types = {
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

    const TYPE_NAMES_UPPER = {
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

    const TYPE_NAMES = {
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

    /**
     * Create a sheet of Google Spreadsheet by JSON object containing values representing Google Form contents.
     * @param json {Object} JSON object containing values representing Google Form contents
     * @param sheet {Object} output target sheet of Google Spreadsheet
     * */
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
    /**
     * Create a Google Form by a sheet of Google Spreadsheet containing values representing Google Form contents.
     * @param sheet {Object} sheet of Google Spreadsheet containing values representing Google Form contents
     * @param [formTitle] {string} form title (optional)
     * */
    function convert(sheet, formTitle) {
        var context = {
            editUrl: undefined,
            publishedUrl: undefined,
            summaryUrl: undefined,
            version: '1',
            form: null,
            formPreferences: {title:formTitle},
            rowIndexKey: {},
            sheet: sheet,
            lastColumn: sheet.getLastColumn(),
            lastRow: sheet.getLastRow(),
            values: sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues(),
            rowIndex: 0,
            row: undefined,
            pageBreakItems: {},
            feedbackForCorrect: {},
            feedbackForIncorrect: {}
        };
        return startState(context);
    }

    const COL_INDEX = {
        COMMAND: 0,
        META: {
            ID: 1,
            VERSION: 1,
            TITLE: 1,
            DESCRIPTION: 1,
            MESSAGE: 1,
            BOOLEAN: 1,
            URL: 1
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

    const EMPTY_STRING = '';

    const ALIGNMENT = {
        'LEFT': FormApp.Alignment.LEFT,
        'CENTER': FormApp.Alignment.CENTER,
        'RIGHT': FormApp.Alignment.RIGHT
    };

    const PAGE_NAVIGATION_TYPE = {
        'CONTINUE': FormApp.PageNavigationType.CONTINUE,
        'GO_TO_PAGE': FormApp.PageNavigationType.GO_TO_PAGE,
        'RESTART': FormApp.PageNavigationType.RESTART,
        'SUBMIT': FormApp.PageNavigationType.SUBMIT
    };

    function booleanValue(value) {
        if (typeof value === 'boolean') {
            return value;
        } else if (typeof value === 'string') {
            return ! (value.toLowerCase() === 'false' || value === '0' || value === EMPTY_STRING);
        } else if (typeof value === 'number') {
            return (0 < value);
        }
        return false;
    }

    function callWithBooleanValue(value, callback) {
        var b = booleanValue(value);
        if (b) {
            callback(b);
        }
    }

    function callWithIntegerValue(value, callback) {
        var intValue = parseInt(value, 10);
        if (!isNaN(intValue)) {
            callback(intValue);
        }
    }

    function isNotNullValue(value) {
        return (value !== undefined && value !== null && value !== EMPTY_STRING);
    }

    function callWithNotNullValue(value, callback) {
        if (isNotNullValue(value)) {
            callback(value);
        }
    }

    const formMetadataRetrievers = {
        title: function (context) {
            context.formPreferences.title = context.row[COL_INDEX.META.TITLE];
        },
        description: function (context) {
            context.formPreferences.description = context.row[COL_INDEX.META.DESCRIPTION];
        },
        isQuiz: function (context) {
            context.formPreferences.isQuiz = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        shuffleQuestions: function (context) {
            context.formPreferences.shuffleQuestions = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        acceptingResponses: function (context) {
            context.formPreferences.acceptingResponses = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        allowResponseEdits: function (context) {
            context.formPreferences.allowResponseEdits = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        collectEmail: function (context) {
            context.formPreferences.collectEmail = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        limitOneResponsePerUser: function (context) {
            context.formPreferences.limitOneResponsePerUser = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        progressBar: function (context) {
            context.formPreferences.progressBar = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        publishingSummary: function (context) {
            context.formPreferences.publishingSummary = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        requireLogin: function (context) {
            context.formPreferences.requireLogin = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        showLinkToRespondAgain: function (context) {
            context.formPreferences.showLinkToRespondAgain = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
        },
        confirmationMessage: function(context) {
            context.formPreferences.confirmationMessage = context.row[COL_INDEX.META.MESSAGE];
        },
        customClosedFormMessage: function (context) {
            context.formPreferences.customClosedFormMessage = context.row[COL_INDEX.META.MESSAGE];
        },
        editors: function(context){
            context.formPreferences.editors = context.row[COL_INDEX.META.MESSAGE].split(/,\s*/);
        },
        id: function(context){
            context.formPreferences.id = context.row[COL_INDEX.META.ID];
            context.rowIndexKey.id = context.rowIndex;
        },
        editUrl: function(context){
            context.formPreferences.editUrl = context.row[COL_INDEX.META.URL];
            context.rowIndexKey.editUrl = context.rowIndex;
        },
        publishedUrl: function(context){
            context.formPreferences.publishedUrl = context.row[COL_INDEX.META.URL];
            context.rowIndexKey.publishedUrl = context.rowIndex;
        },
        summaryUrl: function(context){
            context.formPreferences.summaryUrl = context.row[COL_INDEX.META.URL];
            context.rowIndexKey.summaryUrl = context.rowIndex;
        }
    };

    const formMetadataHandlers = {
        title: function (context) {
            context.form.setTitle(context.formPreferences.title)
        },
        description: function (context) {
            context.form.setDescription(context.formPreferences.description)
        },
        isQuiz: function (context) {
            context.form.setIsQuiz(context.formPreferences.isQuiz);
        },
        shuffleQuestions: function (context) {
            context.form.setShuffleQuestions(context.formPreferences.shuffleQuestions);
        },
        acceptingResponses: function (context) {
            context.form.setAcceptingResponses(context.formPreferences.acceptingResponses);
        },
        allowResponseEdits: function (context) {
            context.form.setAllowResponseEdits(context.formPreferences.allowResponseEdits);
        },
        collectEmail: function (context) {
            context.form.setCollectEmail(context.formPreferences.collectEmail);
        },
        limitOneResponsePerUser: function (context) {
            context.form.setLimitOneResponsePerUser(context.formPreferences.limitOneResponsePerUser);
        },
        progressBar: function (context) {
            context.form.setProgressBar(context.formPreferences.progressBar);
        },
        publishingSummary: function (context) {
            context.form.setPublishingSummary(context.formPreferences.publishingSummary);
        },
        requireLogin: function (context) {
            context.form.setRequireLogin(context.formPreferences.requireLogin);
        },
        showLinkToRespondAgain: function (context) {
            context.form.setShowLinkToRespondAgain(context.formPreferences.showLinkToRespondAgain);
        },
        confirmationMessage: function(context) {
            context.form.setConfirmationMessage(context.formPreferences.confirmationMessage);
        },
        customClosedFormMessage: function (context) {
            context.form.setCustomClosedFormMessage(context.formPreferences.customClosedFormMessage);
        },
        editors: function(context){
            context.form.addEditors(context.formPreferences.editors);
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
            for (var rowIndex = context.rowIndex + 1; rowIndex < context.lastRow; rowIndex++) {
                var command = context.values[rowIndex][COL_INDEX.COMMAND];
                if (command === EMPTY_STRING) {
                    itemList.push({
                        label: context.values[rowIndex][COL_INDEX.ITEM.Q.CHOICE.ITEM.LABEL],
                        isCorrectAnswer: booleanValue(context.values[rowIndex][COL_INDEX.ITEM.Q.CHOICE.ITEM.IS_CORRECT_ANSWER]),
                        navigation: context.values[rowIndex][COL_INDEX.ITEM.Q.CHOICE.ITEM.NAVIGATION]
                    });
                } else if (command.charAt(0) === '#' || command === 'comment') {
                    continue;
                } else {
                    context.rowIndex = rowIndex - 1;
                    break;
                }
            }
            Logger.log(JSON.stringify(itemList));
            var choices = itemList.map(function (item) {
                var goToPageTitle = item.navigation;
                var goToPageBreakItem = context.pageBreakItems[goToPageTitle];
                if (goToPageBreakItem) {
                    return context.item.createChoice(item.label, goToPageBreakItem);
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

    function multipleChoiceHandler (context) {
        context.item = context.form.addMultipleChoiceItem();
        itemModifiers.choices(context);
        itemModifiers.itemMetadata(context);
        itemModifiers.questionMetadata(context);
        itemModifiers.showOtherOption(context);
        if (context.form.isQuiz()) {
            itemModifiers.quizMetadata(context);
        }
    };

    function gridHandler (context){
        var rowList = [], colList = [];
        for (var rowIndex = context.rowIndex + 1; rowIndex < context.lastRow; rowIndex++) {
            var command = context.values[rowIndex][COL_INDEX.COMMAND];
            if (command === EMPTY_STRING) {
                callWithNotNullValue(context.values[rowIndex][COL_INDEX.ITEM.Q.GRID.ITEM.ROW_LABEL], function (value) {
                    rowList.push(value);
                });
                callWithNotNullValue(context.values[rowIndex][COL_INDEX.ITEM.Q.GRID.ITEM.COL_LABEL], function (value) {
                    colList.push(value);
                });
            } else if (command.charAt(0) === '#'){
                continue;
            } else {
                context.rowIndex = rowIndex - 1;
                break;
            }
        }
        context.item.setRows(rowList).setColumns(colList);
        itemModifiers.itemMetadata(context);
        itemModifiers.questionMetadata(context);
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
            context.item = context.form.addCheckboxGridItem();
            gridHandler(context);
        },

        grid: function (context) {
            context.item = context.form.addGridItem();
            gridHandler(context);
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
            var pageNavigationType = context.row[COL_INDEX.ITEM.PAGE_BREAK.PAGE_NAVIGATION_TYPE];
            if(pageNavigationType === EMPTY_STRING){
                pageNavigationType = PAGE_NAVIGATION_TYPE.CONTINUE;
            }

            var pageBreakItem = context.pageBreakItems[title];

            var lastItemIndex = context.form.getItems().length - 1;
            context.form.moveItem(pageBreakItem.getIndex(), lastItemIndex);
            /*
            if(pageNavigationType !== PAGE_NAVIGATION_TYPE.CONTINUE){
                var goToPageTitle = context.row[COL_INDEX.ITEM.PAGE_BREAK.GO_TO_PAGE_TITLE];
                var goToPageBreakItem = context.pageBreakItems[goToPageTitle];
                if(goToPageBreakItem) {
                    pageBreakItem.setGoToPage(goToPageBreakItem);
                }
            }
            */
        },

        feedback: function (context) {
            var feedback = FormApp.createFeedback();
            for (var rowIndex = context.rowIndex; rowIndex < context.lastRow; rowIndex++) {
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
        return mainLoopState(context);
    }

    function setupPageBreakItems(context) {
        var _row = context.row;
        var _item = context.item;

        for (var rowIndex = 0; rowIndex < context.lastRow; rowIndex++) {
            context.row = context.values[rowIndex];
            if (context.row[COL_INDEX.COMMAND] === 'pageBreak') {
                context.item = context.form.addPageBreakItem();
                itemModifiers.itemMetadata(context);
                context.pageBreakItems[context.item.getTitle()] = context.item;
            }
        }
        context.row = _row;
        context.item = _item;
    }

    function mainLoopState(context) {
        for (context.rowIndex = 0; context.rowIndex < context.lastRow; context.rowIndex++) {
            Logger.log('row:' + context.rowIndex);
            context.row = context.values[context.rowIndex];
            var command = context.row[COL_INDEX.COMMAND];
            if (command === '' || command === 'end') {
                break;
            } else if (command.charAt(0) === '#' || command === 'comment') {
                continue;
            } else if (formMetadataRetrievers[command]) {
                formMetadataRetrievers[command](context);
            } else if (itemHandlers[command]) {
                if (context.form === null){
                    if (context.formPreferences.id) {
                        context.form = FormApp.openById(context.formPreferences.id);
                        var numItems = context.form.getItems().length;
                        for(var index = numItems - 1; 0 <= index; index--){
                            context.form.deleteItem(index);
                        }
                    } else {
                        context.form = FormApp.create(context.formPreferences.title);
                    }
                    updateCellValues(context);
                    Object.keys(context.formPreferences).forEach(function(command){
                        formMetadataHandlers[command](context);
                    });
                    setupPageBreakItems(context);
                }
                itemHandlers[command](context);
            } else {
                var errorMessage = 'ERROR in row #' + context.rowIndex + '\t' + context.row.join('\t');
                Logger.log(errorMessage);
                throw errorMessage;
            }
        }
        return endState(context);
    }

    function updateCellValues(context){
        Object.keys(context.rowIndexKey).forEach(function(key){
           var rowIndex = context.rowIndexKey[key];
           if(0 <= rowIndex){
               var value = null;
               switch(key) {
                   case 'id':
                       value = context.form.getId();
                       break;
                   case 'editUrl':
                       value = context.form.getEditUrl();
                       break;
                   case 'publishedUrl':
                       value = context.form.getPublishedUrl();
                       break;
                   case 'summaryUrl':
                       value = context.form.getSummaryUrl();
                       break;
               }
               context.sheet.getRange(rowIndex + 1, 2).setValue(value);
           }
        });
    }

    function endState(context) {
        return context.form;
    }

    return {
        convert: convert
    };
}

module.exports = Sheet2Form;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var exportForm = __webpack_require__(2);
var importForm = __webpack_require__(3);
global.exportForm = exportForm.exportForm;
global.importForm = importForm.importForm;
global.exportFormWithDialog = exportForm.exportFormWithDialog;
global.importFormWithDialog = importForm.importFormWithDialog;
global.onOpen = __webpack_require__(4).onOpen;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);