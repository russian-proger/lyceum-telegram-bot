// ====================================================
// | INCLUDING LIBRARIES
// ====================================================
// Native
const http = require('http');
const https = require('https');

// Additional
const express = require('express');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const expressStaticGzip = require("express-static-gzip");

// Mine
const adminRouter = require('./src/server/routes/admin/index.js');
const apiRouter = require('./src/server/routes/admin/index.js');
const telBotExpress = require('./src/server/tel-bot/index.js');

// ====================================================
// | INITIALIZING
// ====================================================

// Constants declaration
const app = express();
const server = http.createServer(app);

// Setting render engine
app.set('view engine', 'pug');
app.set('views', 'views');

// Using cookie
app.use(cookieParser());
app.set('etag', false);
app.disable('x-powered-by');

// Opening virtual dirs
app.use('/assets', expressStaticGzip(__dirname.concat('/assets')));
app.use('/static', expressStaticGzip(__dirname.concat('/static')));
app.use('/dist', expressStaticGzip(__dirname.concat('/dist'), {}));

// Using body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// ====================================================
// | ROUTING
// ====================================================

app.use('/admin', adminRouter);
// app.use('/api', apiRouter);
// app.use('/tel-bot', telBotExpress);


// Start listening
server.listen(80);