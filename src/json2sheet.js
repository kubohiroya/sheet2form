'use strict';
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