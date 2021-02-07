var https = require('https');

import * as Config from '../config';
import * as BotTypes from './types';

function callAPI(methodName:any, params:any={}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(params);
    /** @type {https.RequestOptions} */
    const options = ({
      hostname: 'api.telegram.org',
      protocol: 'https:',
      path: `/bot${Config.env().bot.token}/${methodName}`,
      port: 443,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    });

    const req = https.request(options, (res:any) => {
      var response = "";
      res.on('data', (d:any) => {
        response += d;
      })

      res.on('end', () => {
        resolve(JSON.parse(response));
      })
    });

    req.on('error', (error:any) => {
      console.error(error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

/**
 * `Set Webhook` method
 * @param {Object} params
 * @param {String} params.url 
 */
export function setWebhook(params:any) {
  return callAPI("setWebhook", params);
}

export function getWebhook() {
  return callAPI("getWebhookInfo");
}

export function deleteWebhook() {
  return callAPI("deleteWebhook");
}

/** @param {BotTypes.SendMessage} params */
export function sendMessage(params:any) {
  return callAPI("sendMessage", params);
}

/**
 * @param {BotTypes.Update} updateQuery
 */
export function handle(updateQuery:any) {
  console.log(updateQuery);

  var message:BotTypes.SendMessage = new Object();
  message.text = "Hello!";
  message.chat_id = updateQuery.message.chat.id;

  sendMessage(message);
}