"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.sendMessage = exports.deleteWebhook = exports.getWebhook = exports.setWebhook = void 0;
var https = require('https');
const Config = __importStar(require("../config"));
function callAPI(methodName, params = {}) {
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
        const req = https.request(options, (res) => {
            var response = "";
            res.on('data', (d) => {
                response += d;
            });
            res.on('end', () => {
                resolve(JSON.parse(response));
            });
        });
        req.on('error', (error) => {
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
exports.setWebhook = setWebhook;
function getWebhook() {
    return callAPI("getWebhookInfo");
}
exports.getWebhook = getWebhook;
function deleteWebhook() {
    return callAPI("deleteWebhook");
}
exports.deleteWebhook = deleteWebhook;
/** @param {BotTypes.SendMessage} params */
function sendMessage(params) {
    return callAPI("sendMessage", params);
}
exports.sendMessage = sendMessage;
/**
 * @param {BotTypes.Update} updateQuery
 */
function handle(updateQuery) {
    console.log(updateQuery);
    var message = new Object();
    message.text = "Hello!";
    message.chat_id = updateQuery.message.chat.id;
    sendMessage(message);
}
exports.handle = handle;
