'use strict';
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
