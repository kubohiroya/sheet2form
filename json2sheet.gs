function JsonToSheet(){
  
  function jsonToSheet(json, sheet){
    valuesToSheet(jsonToValues(json), sheet);
  }
  
  function activeFormToSheet(){
    openFormToSheet(FormApp.getActiveForm());
  }
  
  function openFormToSheet(form, sheet){
    try{
      //var sheet = SpreadsheetApp.openByUrl('https://example.com/....').getSheetByName('name'); //FIXME
      
      var json = formToJson(form);
      var values = jsonToValues(json);
      valuesToSheet(values, sheet);
      Logger.log(JSON.stringify(json, null, "  "));
    }catch(err){
      Logger.log(JSON.stringify(err, null, "  "));
    }
  }
  
    
  /**
  与えられたitemsのJSONをもとに、スプレッドシートに書き込む2次元配列での値を生成する
  */
  function jsonToValues(json){
    
    // FIXME
    
  }
  
  /**
  与えられた2次元配列の値をもとに、指定されたシートに対して、所与の文法でセルに値を設定していく
  */
  function valuesToSheet(values, sheet){
    
    // FIXME: SpreadsheetApp を用いて実装する
    
    //getじゃなくてset
    
    /**
    //シート全体のデータを取得する場合
    var data = sheet.getDataRange().getValues();
    // dataにはシートのデータが２次元配列で入る
    
    //特定の行(1行目)のデータを取得する場合
    var rowIndex = 1;
    var colStartIndex = 1;
    var rowNum = 1;
    var data = sheet.getRange(rowIndex, colStartIndex, rowNum, sheet.getLastColumn()).getValues();
    */
  }
  
  return {
    activeFormToSheet: activeFormToSheet,
    openFormToSheet: openFormToSheet,
  };
}
