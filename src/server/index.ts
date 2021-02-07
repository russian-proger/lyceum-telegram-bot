// ====================================================
// | INCLUDING LIBRARIES
// ====================================================
// Native
import fs from 'fs';
import express from 'express';
import http    from 'http';

// Additional
var bodyParser        = require('body-parser');
var cookieParser      = require('cookie-parser');
var expressStaticGzip = require("express-static-gzip");

// Mine
import adminRouter  from './routes/admin';
import apiRouter    from './routes/api';
import telBotRouter from './tel-bot/router';


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
app.use('/dist',   expressStaticGzip('./dist', {}));

// Using body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ====================================================
// | ROUTING
// ====================================================
app.use('/admin', adminRouter);
app.use('/api', apiRouter);
app.use('/tel-bot', telBotRouter);

// Start listening
server.listen(80);
console.log("Server is listening");