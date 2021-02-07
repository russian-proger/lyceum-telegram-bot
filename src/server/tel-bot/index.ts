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

export function sendMessage(params:BotTypes.SendMessage) {
  return callAPI("sendMessage", params);
}

export function editMessageReplyMarkup(params:BotTypes.EditMessageReplyMarkup) {
  return callAPI("editMessageReplyMarkup", params);
}

export function answerCallbackQuery(params:BotTypes.AnswerCallbackQuery) {
  return callAPI("answerCallbackQuery", params);
}

/**
 * @param {BotTypes.Update} updateQuery
 */
export function handle(updateQuery:BotTypes.Update) {
  if (updateQuery.message && updateQuery.message.chat) {
    var message:BotTypes.SendMessage = {
      chat_id: updateQuery.message.chat.id,
      text: "Answer"
    };
    message.reply_markup = {
      remove_keyboard: true,
      inline_keyboard: [[{text: "button 1", callback_data: "1"}]]
    };
    sendMessage(message);
  } else if (updateQuery.callback_query && updateQuery.callback_query.message && updateQuery.callback_query.data) {
    var data:number = parseInt(updateQuery.callback_query.data);
    if (isNaN(data) || !data) data = 0;

    var query:BotTypes.EditMessageReplyMarkup = {
      chat_id: updateQuery.callback_query.message.chat.id,
      message_id: updateQuery.callback_query.message.message_id,
      reply_markup: {
        inline_keyboard: [[{ text: `button ${data + 1}`, callback_data: `${data + 1}` }]]
      }
    };

    var query2:BotTypes.AnswerCallbackQuery = {
      callback_query_id: updateQuery.callback_query.id
    };
    answerCallbackQuery(query2);
    editMessageReplyMarkup(query);
  }
}