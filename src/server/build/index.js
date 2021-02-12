"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ====================================================
// | INCLUDING LIBRARIES
// ====================================================
// Native
var fs = require('fs');
var express = require('express');
var http = require('http');
// Additional
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressStaticGzip = require("express-static-gzip");
// Mine
const admin_1 = __importDefault(require("./routes/admin"));
const api_1 = __importDefault(require("./routes/api"));
const router_1 = __importDefault(require("./tel-bot/router"));
const database_1 = require("./database");
// ====================================================
// | INITIALIZING
// ====================================================
// Constants declaration
const app = express();
const server = http.createServer(app);
// Setting render engine
app.set('view engine', 'pug');
app.set('views', './src/server/views');
// Using cookie
app.use(cookieParser());
app.set('etag', false);
app.disable('x-powered-by');
// Opening virtual dirs
app.use('/assets', expressStaticGzip('./assets'));
app.use('/static', expressStaticGzip('./static'));
app.use('/dist', expressStaticGzip('./dist', {}));
// Using body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
database_1.connectDB();
// ====================================================
// | ROUTING
// ====================================================
app.use('/admin', admin_1.default);
app.use('/api', api_1.default);
app.use('/tel-bot', router_1.default);
// Start listening
server.listen(80);
console.log("Server is listening");
