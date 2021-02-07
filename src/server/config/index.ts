var fs = require('fs');
var ini = require('ini');

var ENV_FILE_PATH:String = 'env.ini';

if (!fs.existsSync(ENV_FILE_PATH)) {
  throw ReferenceError(`Файла с именем ${ENV_FILE_PATH} не существует`);
}
var ENV_CONFIG = ini.parse(fs.readFileSync(ENV_FILE_PATH, { encoding: 'utf-8' }))

export function env() {
  return ENV_CONFIG;
}

export function saveEnv(data:any=ENV_CONFIG) {
  ENV_CONFIG = data;
  fs.writeFileSync(ENV_FILE_PATH, ini.stringify(data), {encoding: 'utf-8'});
}