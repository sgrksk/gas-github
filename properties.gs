/**
 * 開発用プロパティ
 */
const developProperties = {
  'spreadsheetId': 'developId',
}
/**
 * 本番用プロパティ
 */
const productionProperties = {
  'spreadsheetId': 'productionId',
}

/**
 * プロパティを初期化します。
 */
function initProperties() {
  const id = ScriptApp.getScriptId();
  const name = DriveApp.getFileById(id).getName();
  const names = name.split('_');
  const properties = PropertiesService.getUserProperties();
  if (names.length === 1) {
    // 本番用
    properties.setProperties(productionProperties);
  } else {
    // 開発用
    properties.setProperties(developProperties);
  }
}