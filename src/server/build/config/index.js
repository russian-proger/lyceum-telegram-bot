"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveEnv = exports.env = void 0;
var fs = require('fs');
var ini = require('ini');
var ENV_FILE_PATH = 'env.ini';
if (!fs.existsSync(ENV_FILE_PATH)) {
    throw ReferenceError(`Файла с именем ${ENV_FILE_PATH} не существует`);
}
var ENV_CONFIG = ini.parse(fs.readFileSync(ENV_FILE_PATH, { encoding: 'utf-8' }));
function env() {
    return ENV_CONFIG;
}
exports.env = env;
function saveEnv(data = ENV_CONFIG) {
    ENV_CONFIG = data;
    fs.writeFileSync(ENV_FILE_PATH, ini.stringify(data), { encoding: 'utf-8' });
}
exports.saveEnv = saveEnv;
