const express = require('express');

const telBotRouter = express.Router();
telBotRouter.name = "tel-bot";

telBotRouter.all(/^.*/, (req, res) => {
  console.log(req.path);
  res.sendStatus(200);
});

module.exports = telBotRouter;