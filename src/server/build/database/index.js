"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConnected = exports.connectDB = void 0;
const mysql = __importStar(require("mysql2"));
const config_1 = require("../config");
const log_1 = __importDefault(require("./../log"));
var pool;
var is_connected = false;
/**
 * Checking mysql configs
 */
function checkConfig() {
    var mc = config_1.env().mysql;
    return (mc.database != "" && mc.host != "" && mc.login != "") ? mc : null;
}
/**
 * Procedure for connection to the
 */
function connectDB() {
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
        pool.getConnection((err, conn) => {
            if (!err) {
                is_connected = true;
                resolve(true);
            }
            else {
                log_1.default.error(`Database: err.message`);
                is_connected = false;
                resolve(false);
            }
        });
    });
}
exports.connectDB = connectDB;
function isConnected() {
    return is_connected;
}
exports.isConnected = isConnected;
