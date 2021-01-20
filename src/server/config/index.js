const fs = require('fs');
const ini = require('ini');

const CONFIG_FILE_PATH = './config.ini';

function getConfig() {
  return ini.parse(fs.readFileSync(CONFIG_FILE_PATH, { encoding: 'utf-8' }));
  
}

function setConfig(data) {
  fs.writeFileSync(CONFIG_FILE_PATH, ini.stringify(data), { encoding: 'utf-8' });
}

module.exports.setConfig = setConfig;
module.exports.getConfig = getConfig;