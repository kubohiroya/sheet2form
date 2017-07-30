'use strict';

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
            BOOLEAN: 1,
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
        'SUBMIT': FormApp.PageNavigationType.SUBMIT,
    };

    var booleanValue = function (value) {
        if (typeof value === 'boolean') {
            return value;
        } else if (typeof value === 'string') {
            return (value.toLowerCase() === 'false' || value === '0' || value === EMPTY_STRING) ? false : true;
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
    }

    var callWithNotNullValue = function (value, callback) {
        if (isNotNullValue(value)) {
            callback(value);
        }
    }

    const formMetadataHandlers = {
        form: function (context) {
            var editUrl = context.row[COL_INDEX.META.EDIT_URL];
            var publishedUrl = context.row[COL_INDEX.META.PUBLISHED_URL];
            var summaryUrl = context.row[COL_INDEX.META.SUMMARY_URL];
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
            context.form.setShuffileQuestions(value);
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
        shuffleQuestions: function (context) {
            var value = booleanValue(context.row[COL_INDEX.META.BOOLEAN]);
            context.form.setShuffleQuestions(value);
        },
        confirmationMessage: function (context) {
            var confirmationMessage = context.row[COL_INDEX.META.MESSAGE];
            context.form.setConfirmationMessage(confirmationMessage);
        },
        customClosedFormMessage: function (context) {
            var customClosedFormMessage = context.row[COL_INDEX.META.MESSAGE];
            context.form.setCustomClosedFormMessage(customClosedFormMessage);
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
        },
    };

    const itemPreprocessor = {
        pageBreak: function (context) {
            context.item = context.form.addPageBreakItem();
            itemModifiers.itemMetadata(context);
            context.pageBreakItems[context.item.getTitle()] = context.item;
        }
    };

    const itemHandlers = {
        radio: function (context) {
            context.item = context.form.addMultipleChoiceItem();
            itemModifiers.choices(context);
            itemModifiers.itemMetadata(context);
            itemModifiers.questionMetadata(context);
            itemModifiers.showOtherOption(context);
            if (context.form.isQuiz()) {
                itemModifiers.quizMetadata(context);
            }
        },

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
                if ((command === 'feedback' && rowIndex === context.rowIndex) || !isNotNullValue(command)) {
                    callWithNotNullValue(context.values[rowIndex][COL_INDEX.FEEDBACK.TEXT_OR_URL], function (value) {
                        setFeedbackContent(feedback, value, context.values[rowIndex][COL_INDEX.FEEDBACK.DISPLAY_TEXT]);
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
