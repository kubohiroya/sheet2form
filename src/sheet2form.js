'use strict';
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

    const formPropertiesRetrievers = {
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

    const formPropertiesHandlers = {
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
        itemProperties: function (context) {
            callWithNotNullValue(context.row[COL_INDEX.ITEM.TITLE], function (value) {
                context.item.setTitle(value);
            });
            callWithNotNullValue(context.row[COL_INDEX.ITEM.HELP_TEXT], function (value) {
                context.item.setHelpText(value);
            });
        },
        questionProperties: function (context) {
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
            var choices = itemList.map(function (item) {
                var goToPageTitle = item.navigation;
                var goToPageBreakItem = context.pageBreakItems[goToPageTitle];
                if (goToPageBreakItem) {
                    return context.item.createChoice(item.label, goToPageBreakItem);
                } else if (item.navigation === PAGE_NAVIGATION_TYPE.CONTINUE) {
                    return context.item.createChoice(item.label, FormApp.PageNavigationType.CONTINUE);
                } else if (item.navigation === PAGE_NAVIGATION_TYPE.RESTART) {
                    return context.item.createChoice(item.label, FormApp.PageNavigationType.RESTART);
                } else if (item.navigation === PAGE_NAVIGATION_TYPE.SUBMIT) {
                    return context.item.createChoice(item.label, FormApp.PageNavigationType.SUBMIT);
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
        quizProperties: function (context) {
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
        itemModifiers.itemProperties(context);
        itemModifiers.questionProperties(context);
        itemModifiers.showOtherOption(context);
        if (context.form.isQuiz()) {
            itemModifiers.quizProperties(context);
        }
    }

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
        itemModifiers.itemProperties(context);
        itemModifiers.questionProperties(context);
    }

    const itemHandlers = {
        radio: multipleChoiceHandler,

        multipleChoice: multipleChoiceHandler,

        checkbox: function (context) {
            context.item = context.form.addCheckboxItem();
            itemModifiers.choices(context);
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
            itemModifiers.showOtherOption(context);
            if (context.form.isQuiz()) {
                itemModifiers.quizProperties(context);
            }
        },

        list: function (context) {
            context.item = context.form.addListItem();
            itemModifiers.choices(context);
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
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
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
        },

        date: function (context) {
            context.item = context.form.addDateItem();
            itemModifiers.includesYear(context);
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
        },

        datetime: function (context) {
            context.item = context.form.addDateTimeItem();
            itemModifiers.includesYear(context);
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
        },

        text: function (context) {
            context.item = context.form.addTextItem();
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
        },

        paragraphText: function (context) {
            context.item = context.form.addParagraphTextItem();
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
        },

        duration: function (context) {
            context.item = context.form.addDurationItem();
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
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
            itemModifiers.itemProperties(context);
            itemModifiers.questionProperties(context);
        },

        sectionHeader: function (context) {
            context.item = context.form.addSectionHeaderItem();
            itemModifiers.itemProperties(context);
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
            itemModifiers.itemProperties(context);
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
            itemModifiers.itemProperties(context);
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

            if(pageNavigationType !== PAGE_NAVIGATION_TYPE.CONTINUE){
                var goToPageTitle = context.row[COL_INDEX.ITEM.PAGE_BREAK.GO_TO_PAGE_TITLE];
                var goToPageBreakItem = context.pageBreakItems[goToPageTitle];
                if(goToPageBreakItem) {
                    pageBreakItem.setGoToPage(goToPageBreakItem);
                }else if(pageNavigationType === PAGE_NAVIGATION_TYPE.CONTINUE) {
                    pageBreakItem.setGoToPage(FormApp.PageNavigationType.CONTINUE);
                }else if(pageNavigationType === PAGE_NAVIGATION_TYPE.RESTART) {
                    pageBreakItem.setGoToPage(FormApp.PageNavigationType.RESTART);
                }else if(pageNavigationType === PAGE_NAVIGATION_TYPE.SUBMIT) {
                    pageBreakItem.setGoToPage(FormApp.PageNavigationType.SUBMIT);
                }
            }
        },

        feedback: function (context) {
            var feedback = FormApp.createFeedback();
            for (var rowIndex = context.rowIndex; rowIndex < context.lastRow; rowIndex++) {
                var command = context.values[rowIndex][COL_INDEX.COMMAND];
                var feedbackDisplayTextOrUrl = context.values[rowIndex][COL_INDEX.FEEDBACK.TEXT_OR_URL];
                var feedbackDisplayText = context.values[rowIndex][COL_INDEX.FEEDBACK.DISPLAY_TEXT];
                if ( command.charAt(0) === '#' || command === 'comment') {
                    continue;
                } else if ((command === 'feedback' && rowIndex === context.rowIndex) || ! isNotNullValue(command)) {
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
                itemModifiers.itemProperties(context);
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
            } else if (formPropertiesRetrievers[command]) {
                formPropertiesRetrievers[command](context);
            } else if (itemHandlers[command]) {
                if (context.form === null){
                    if (context.formPreferences.id) {
                        context.form = FormApp.openById(context.formPreferences.id);
                        while(context.form.getItems().length > 0){
                            context.form.deleteItem(0);                            
                        }
                    } else {
                        context.form = FormApp.create(context.formPreferences.title);
                    }
                    updateCellValues(context);
                    Object.keys(context.formPreferences).forEach(function(command){
                        formPropertiesHandlers[command](context);
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
