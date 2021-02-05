const express = require('express');

const Bot = require('./index');

const telBotRouter = express.Router();

telBotRouter.name = "tel-bot";

telBotRouter.all(/webhook/, (req, res) => {
  Bot.handle(req.body);
  res.sendStatus(200);
});

module.exports = telBotRouter;