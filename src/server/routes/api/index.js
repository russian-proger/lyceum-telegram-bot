const express = require('express');
const config = require('../../config');

const Bot = require('./../../tel-bot');

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
  const result = ({
    ok: false,
    message: ""
  })

  if (!req.body.token) {
    result.message = "'Token' wasn't set";
  } else if (!/^\d+:[\d\w_-]+$/.test(req.body.token)) {
    result.message = "Token is invalid"
  } else {
    config.env().bot.token = req.body.token;
    config.saveEnv();
    result.ok = true;
  }

  res.send(JSON.stringify(result));
})

adminRouter.post("/setWebhook", async (req, res) => {
  const result = ({
    ok: false,
    message: ""
  });

  if (!req.body.url) {
    result.message = "URL wasn't set";
  } else if (!/^https:\/\/.+\.(com|space|ru|site|org)(:\d{1,5})?/.test(req.body.url)) {
    result.message = "URL is invalid";
  } else {
    const response = await Bot.setWebhook({ url: req.body.url });
    console.log(response);
    result.ok = true;
    result.result = response.ok;
    result.message = response.description;
  }

  res.send(JSON.stringify(result));
});

adminRouter.post("/getWebhook", async (req, res) => {
  const response = await Bot.getWebhook();
  const result = ({
    ok: response.ok,
    result: response.result,
    message: response.description
  });

  res.send(JSON.stringify(result));
});

adminRouter.post("/delWebhook", async (req, res) => {
  const result = ({
    ok: true,
    message: ""
  });

  const response = await Bot.deleteWebhook();
  result.message = response.description;

  res.send(JSON.stringify(result));
})

module.exports = adminRouter;