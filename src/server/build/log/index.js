"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var LOGS_FILE = (__dirname.concat("/logs.txt"));
class Log {
    constructor(filename = "") {
        this.filename = filename;
    }
    write(message, tag) {
        var note = `${new Date().toString().replace(/\(.*\)/, '')} [${tag}]: ${message}\n`;
        fs.appendFileSync(this.filename, note);
    }
    log(message, tag) {
        this.write(message, tag);
    }
    info(message) {
        this.write(message, 'INFO');
    }
    warn(message) {
        this.write(message, 'WARNING');
    }
    error(message) {
        this.write(message, 'ERROR');
    }
}
var LogInstance = new Log(LOGS_FILE);
LogInstance.log("started", "SYSTEM");
exports.default = LogInstance;
