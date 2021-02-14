import * as express from 'express';

import * as Config from '../../config';
import * as Bot    from './../../tel-bot';
import * as DB     from './../../database';

import Tables from './../../database/tables';

const apiRouter:express.Router = express.Router();

apiRouter.post("/getBotToken", (req:any, res:any) => {
  const result = {
    ok: true,
    response: Config.env().bot.token
  }
  res.send(JSON.stringify(result));
});

apiRouter.post("/setBotToken", (req:any, res:any) => {
  const result = ({
    ok: false,
    message: ""
  })

  if (!req.body.token) {
    result.message = "'Token' wasn't set";
  } else if (!/^\d+:[\d\w_-]+$/.test(req.body.token)) {
    result.message = "Token is invalid"
  } else {
    Config.env().bot.token = req.body.token;
    Config.saveEnv();
    result.ok = true;
  }

  res.send(JSON.stringify(result));
})

apiRouter.post("/setWebhook", async (req:any, res:any) => {
  const result = ({
    ok: false,
    message: "",
    result: null
  });

  if (!req.body.url) {
    result.message = "URL wasn't set";
  } else if (!/^https:\/\/.+\.(com|space|ru|site|org)(:\d{1,5})?/.test(req.body.url)) {
    result.message = "URL is invalid";
  } else {
    const response:any = await Bot.setWebhook({ url: req.body.url });
    result.ok = true;
    result.result = response.ok;
    result.message = response.description;
  }

  res.send(JSON.stringify(result));
});

apiRouter.post("/getWebhook", async (req:any, res:any) => {
  const response:any = await Bot.getWebhook();
  const result = ({
    ok: response.ok,
    result: response.result,
    message: response.description
  });

  res.send(JSON.stringify(result));
});

apiRouter.post("/delWebhook", async (req:any, res:any) => {
  const result = ({
    ok: true,
    message: ""
  });

  const response:any = await Bot.deleteWebhook();
  result.message = response.description;

  res.send(JSON.stringify(result));
});

apiRouter.post('/getDatabaseState', (req, res) => {
  const result = ({
    ok: true,
    result: DB.isConnected()
  });

  res.send(JSON.stringify(result));
});

apiRouter.post('/getDatabaseConfig', (req, res) => {
  const result = ({
    ok: true,
    result: Config.env().mysql
  });

  res.send(JSON.stringify(result));
});

apiRouter.post('/reconnectDatabase', async (req, res) => {
  const result = ({
    ok: true,
    result: await DB.connectDB()
  });

  res.send(JSON.stringify(result));
})

apiRouter.post('/setDataBaseConfig', async (req, res) => {
  const result = ({
    ok: true,
    result: {}
  });

  if (!req.body.config) {
    result.ok = false;
    return res.send(JSON.stringify(result));
  }

  // Текущая конфигурация
  let env = Config.env();

  // Обновление свойств
  env.mysql.host      = req.body.config.host      ?? env.mysql.host;
  env.mysql.login     = req.body.config.login     ?? env.mysql.login;
  env.mysql.password  = req.body.config.password  ?? env.mysql.password;
  env.mysql.port      = req.body.config.port      ?? env.mysql.port;
  env.mysql.database  = req.body.config.database  ?? env.mysql.database;

  // Сохранение новой конфигурации
  Config.saveEnv(env);

  result.result = {
    connected: await DB.connectDB()
  };

  res.send(JSON.stringify(result));
})

export default apiRouter;