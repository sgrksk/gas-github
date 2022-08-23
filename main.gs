/**
 * メイン
 */
function main(){
  initProperties();
  const spreadsheetId = PropertiesService.getUserProperties().getProperty('spreadsheetId');
  Logger.log(`spreadsheetId：${spreadsheetId}`);
}