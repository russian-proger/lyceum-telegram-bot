import { Server } from "http";
import { Interface } from "readline";

var fs = require('fs');
var ini = require('ini');

var ENV_FILE_PATH:string = 'env.ini';

if (!fs.existsSync(ENV_FILE_PATH)) {
  throw ReferenceError(`Файла с именем ${ENV_FILE_PATH} не существует`);
}

var ENV_CONFIG:Environment = ini.parse(fs.readFileSync(ENV_FILE_PATH, { encoding: 'utf-8' }))

export interface Mysql_Environment {
  host: string,
  port: number,
  login: string,
  password: string,
  database: string
}

export interface Server_Environment {
  location_path: string
}

export interface Bot_Environment {
  token?: string
}

export interface Environment {
  mysql: Mysql_Environment,
  server: Server_Environment,
  bot: Bot_Environment
}

export function env():Environment {
  return ENV_CONFIG;
}

export function saveEnv(data:Environment=ENV_CONFIG) {
  ENV_CONFIG = data;
  fs.writeFileSync(ENV_FILE_PATH, ini.stringify(data), {encoding: 'utf-8'});
}