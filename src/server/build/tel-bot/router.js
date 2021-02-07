"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bot = require('./index');
var express = require('express');
const telBotRouter = express.Router();
telBotRouter.all(/webhook/, (req, res) => {
    Bot.handle(req.body);
    res.sendStatus(200);
});
exports.default = telBotRouter;
