const express = require('express');
const https = require('https');

const config = require('./../config');
const telBotRouter = require('./router');
const BotTypes = require('./types');

function callAPI(methodName, params={}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(params);
    /** @type {https.RequestOptions} */
    const options = ({
      hostname: 'api.telegram.org',
      protocol: 'https:',
      path: `/bot${config.env().bot.token}/${methodName}`,
      port: 443,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    });

    const req = https.request(options, res => {
      var response = "";
      res.on('data', d => {
        response += d;
      })

      res.on('end', () => {
        resolve(JSON.parse(response));
      })
    });

    req.on('error', error => {
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
function setWebhook(params) {
  return callAPI("setWebhook", params);
}

function getWebhook() {
  return callAPI("getWebhookInfo");
}

function deleteWebhook() {
  return callAPI("deleteWebhook");
}

/**
 * @param {BotTypes.Update} updateQuery
 */
function handle(updateQuery) {
  console.log(updateQuery);
}

module.exports.deleteWebhook = deleteWebhook;
module.exports.getWebhook = getWebhook;
module.exports.setWebhook = setWebhook;
module.exports.handle = handle;
module.exports.router = telBotRouter;