var Bot = require('./index');
var express = require('express');

const telBotRouter = express.Router();

telBotRouter.all(/webhook/, (req:any, res:any) => {
  Bot.handle(req.body);
  res.sendStatus(200);
});

export default telBotRouter;