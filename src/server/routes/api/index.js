const express = require('express');
const config = require('../../config/index');

const adminRouter = express.Router();

adminRouter.name = "api-router";

adminRouter.post("/getBotToken", (req, res) => {
  const result = {
    ok: true,
    response: config.env().bot.token
  }
  res.send(JSON.stringify(result));
});

adminRouter.post("/setBotToken", (req, res) => {
  const result = {
    ok: false,
    message: ""
  }

  if (!req.body.token) {
    result.message = "'Token' wasn't set";
  } else if (!/^\d*:[\d\w]*-\w*$/.test(req.body.token)) {
    result.message = "Token is invalid"
  } else {
    config.env().bot.token = req.body.token;
    config.saveEnv();
    result.ok = true;
  }

  res.send(JSON.stringify(result));
})

module.exports = adminRouter;