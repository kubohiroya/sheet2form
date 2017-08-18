'use strict';

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
