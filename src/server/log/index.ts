var fs = require('fs');

var LOGS_FILE  = (__dirname.concat("/logs.txt"));

class Log {
  private filename;
  constructor(filename="") {
    this.filename = filename;
  }

  private write(message:string, tag:string) {
    var note = `${new Date().toString().replace(/\(.*\)/, '')} [${tag}]: ${message}\n`;
    fs.appendFileSync(this.filename, note);
  }

  public log(message:string, tag:string) {
    this.write(message, tag);
  }

  public info(message:string) {
    this.write(message, 'INFO');
  }

  public warn(message:string) {
    this.write(message, 'WARNING');
  }

  public error(message:string) {
    this.write(message, 'ERROR');
  }
}

var LogInstance = new Log(LOGS_FILE);
LogInstance.log("started", "SYSTEM");

export default LogInstance ;