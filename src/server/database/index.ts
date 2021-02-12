import * as mysql from 'mysql2';

import { env, Environment, Mysql_Environment } from '../config';
import Log from './../log';

var pool:mysql.Pool;
var is_connected = false;

/**
 * Checking mysql configs
 */
function checkConfig():Mysql_Environment|null {
  var mc:Mysql_Environment = env().mysql;

  return (mc.database != "" && mc.host != "" && mc.login != "") ? mc : null;
}

/**
 * Procedure for connection to the 
 */
export function connectDB():Promise<boolean> {
  return new Promise((resolve, reject) => {
    var mysqlConfig = checkConfig();

    if (mysqlConfig == null) {
      return resolve(false);
    }

    pool = mysql.createPool({
      host: mysqlConfig.host,
      port: mysqlConfig.port,
      user: mysqlConfig.login,
      password: mysqlConfig.password,
      database: mysqlConfig.database
    });
  
    pool.getConnection((err: NodeJS.ErrnoException, conn: mysql.PoolConnection) => {
      if (!err) {
        is_connected = true;
        resolve(true);
      } else {
        Log.error(`Database: err.message`);
        is_connected = false;
        resolve(false);
      }
    });
  })
}

export function isConnected():boolean {
  return is_connected;
}