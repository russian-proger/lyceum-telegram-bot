import { connect } from 'http2';
import * as mysql2 from 'mysql2/promise';

import { env, Environment, Mysql_Environment } from '../config';
import Log from './../log';


/**
 * Mysql pool
 */
var pool:mysql2.Pool = mysql2.createPool({
  host:     env().mysql.host,
  port:     env().mysql.port,
  user:     env().mysql.login,
  password: env().mysql.password,
  database: env().mysql.database
});;

/**
 * True if connection is established
 */
var is_connected = false;





/**
 * Checking mysql configs
 */
function checkConfig():Mysql_Environment|null {
  var mc:Mysql_Environment = env().mysql;
  return (mc.database != "" && mc.host != "" && mc.login != "") ? mc : null;
}





/**
 * Procedure for connection to the database
 */
export async function connectDB():Promise<boolean> {
  var mysqlConfig = checkConfig();

  if (mysqlConfig == null) {
    return false;
  }

  var pool = mysql2.createPool({
    host: mysqlConfig.host,
    port: mysqlConfig.port,
    user: mysqlConfig.login,
    password: mysqlConfig.password,
    database: mysqlConfig.database
  });

  let connection:mysql2.PoolConnection;
  try {
    connection = await pool.getConnection();
  } catch (error) {
    Log.error("Failed to connect with DB")
    return is_connected = false;
  }

  Log.info("Server successfully connected to DB");
  return is_connected = true;
}





/**
 * Returns connection state
 */
export function isConnected():boolean {
  return is_connected;
}





/**
 * Will help for giving datatype
 */
export namespace Datatype {
  export const int:string = "INT";
  export const tinyint:string = "TINYINT";
  export const timestamp:string = "TIMESTAMP";
  export const datetime:string = "DATETIME";
  export const varchar = (size:number):string => `VARCHAR(${size})`;
  export const text = (size:number=65535):string => `TEXT${size}`;
}




/**
 * Contains information about a field
 */
export interface Column {
  name:string;
  type:string;
  isNull?:boolean;
  isAutoInc?:boolean;
  isPrimary?:boolean;
}




/**
 * Base table class
 */
export class Table {
  /**
   * Table columns
   */
  protected columns:Column[];

  /**
   * True if table is in database
   */
  protected initialized:boolean;

  /**
   * Name of the table
   */
  public readonly name:string;

  constructor(_name:string, _columns:Column[]) {
    if (!_columns) {
      throw TypeError("columns parameter must be given");
    }
  
    this.columns = _columns;
    this.name = _name;
    this.initialized = false;
    this.exists().then(result => this.initialized = result);
  }

  /**
   * Checks for existing table by the certain name
   */
  protected async exists():Promise<boolean> {
    let cnt:mysql2.PoolConnection = await this.getConnection();
    let config = env().mysql;
    let result = await cnt.query(`SHOW TABLES FROM \`${config.database}\` WHERE \`Tables_in_${config.database}\`="${this.name}"`);

    // @ts-ignore
    return result[0].length != 0;
  }

  /**
   * Gets connection from pool
   */
  protected getConnection():Promise<mysql2.PoolConnection> {
    return pool.getConnection();
  }

  /**
   * Creates a table with columns
   */
  public async create():Promise<boolean> {
    if (!isConnected()) {
      return false;
    }

    console.log("creating table");
    return true;
  }

  /**
   * Drops the table
   */
  public async drop():Promise<boolean> {
    let cnt:mysql2.PoolConnection;

    try {
      cnt = await this.getConnection();
    } catch(error) {
      Log.error("Error truncate table: ".concat(error));
      return false;
    }

    await cnt.query(`DROP TABLE \`${env().mysql.database}\`.\`${this.name}\``);
    return true;
  }

  /**
   * Tuncates the table
   */
  public async truncate():Promise<boolean> {
    let cnt:mysql2.PoolConnection;

    try {
      cnt = await this.getConnection();
    } catch(error) {
      Log.error("Error truncate table: ".concat(error));
      return false;
    }

    await cnt.query(`TRUNCATE TABLE \`${env().mysql.database}\`.\`${this.name}\``);
    return true;
  }
}