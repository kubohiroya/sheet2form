function getMessages(category, locale){
  var locale = locale ? locale : Session.getActiveUserLocale();
  switch(locale){
    case 'ja':
      return getMessages_ja(category);
    case 'en':
    default:
      return getMessages_en(category);
  }
}

function getMessages_en(category) {
  return {
    ui:{
      'create form':'create form',
      'initialize sheet':'initialize sheet',
      'validate sheet':'validate sheet',
      'create new form':'create new form',
      'form title':'form title',
      'form generation canceled':'form generation canceled',
      'new form':'new form',
      'input source spreadsheet ID or URL (blank to use active spreadsheet)':'input source spreadsheet ID or URL (blank to use active spreadsheet)',
      'invalid spreadsheet ID or URL':'invalid spreadsheet ID or URL',
      'input sheet index':'input sheet index',
      '(blank to use active sheet)':'(blank to use active sheet)',
      'invalid sheet index':'invalid sheet index',
      'form generation succeed.':'form generation succeed.',
      'form generation faild.':'form generation faild.'
    }
  }[category];
}

function getMessages_ja(category) {
  return {
    ui:{
      'create form':'フォーム生成',
      'initialize sheet':'シートの初期化・読み込み',
      'validate sheet':'シートの構造を検証する',
      'create new form':'シート内容からフォームを生成する',
      'form title':'フォームのタイトル',
      'form generation canceled':'フォーム生成をキャンセルしました。',
      'new form':'新しいフォーム',
      'input source spreadsheet ID or URL (blank to use active spreadsheet)':'スプレッドシートのIDまたはURLを入力\\n(空欄の入力でアクティブなスプレッドシートを指定)',
      'invalid spreadsheet ID or URL':'不正なIDまたはURLです',
      'input sheet index':'利用するシートのインデックスを数値で指定',
      '(blank to use active sheet)':'または空欄でアクティブなシートを指定',
      'invalid sheet index':'不正なインデックスです',
      'form generation succeed.':'フォーム生成に成功しました。',
      'form generation faild.':'フォーム生成に失敗しました。'
    }
  }[category];
}
