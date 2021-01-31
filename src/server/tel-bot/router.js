const express = require('express');

const telBotRouter = express.Router();
telBotRouter.name = "tel-bot";

telBotRouter.all(/^webhook/, (req, res) => {
  res.sendStatus(200);
});

module.exports = telBotRouter;