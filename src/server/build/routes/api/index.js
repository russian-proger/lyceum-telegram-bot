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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const Config = __importStar(require("../../config"));
const Bot = __importStar(require("./../../tel-bot"));
const apiRouter = express.Router();
apiRouter.post("/getBotToken", (req, res) => {
    const result = {
        ok: true,
        response: Config.env().bot.token
    };
    res.send(JSON.stringify(result));
});
apiRouter.post("/setBotToken", (req, res) => {
    const result = ({
        ok: false,
        message: ""
    });
    if (!req.body.token) {
        result.message = "'Token' wasn't set";
    }
    else if (!/^\d+:[\d\w_-]+$/.test(req.body.token)) {
        result.message = "Token is invalid";
    }
    else {
        Config.env().bot.token = req.body.token;
        Config.saveEnv();
        result.ok = true;
    }
    res.send(JSON.stringify(result));
});
apiRouter.post("/setWebhook", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = ({
        ok: false,
        message: "",
        result: null
    });
    if (!req.body.url) {
        result.message = "URL wasn't set";
    }
    else if (!/^https:\/\/.+\.(com|space|ru|site|org)(:\d{1,5})?/.test(req.body.url)) {
        result.message = "URL is invalid";
    }
    else {
        const response = yield Bot.setWebhook({ url: req.body.url });
        result.ok = true;
        result.result = response.ok;
        result.message = response.description;
    }
    res.send(JSON.stringify(result));
}));
apiRouter.post("/getWebhook", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Bot.getWebhook();
    const result = ({
        ok: response.ok,
        result: response.result,
        message: response.description
    });
    res.send(JSON.stringify(result));
}));
apiRouter.post("/delWebhook", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = ({
        ok: true,
        message: ""
    });
    const response = yield Bot.deleteWebhook();
    result.message = response.description;
    res.send(JSON.stringify(result));
}));
exports.default = apiRouter;
