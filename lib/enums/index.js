"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALUE_LOG_INTERVAL = exports.LongTradeBotState = exports.SymbolType = exports.PositionState = exports.TradingBotState = void 0;
__exportStar(require("./binance"), exports);
var TradingBotState;
(function (TradingBotState) {
    TradingBotState["STARTING"] = "STARTING";
    TradingBotState["WAITING"] = "WAITING";
    TradingBotState["WAITING_TO_REPEAT"] = "WAITING_TO_REPEAT";
    TradingBotState["TRADING"] = "TRADING";
    TradingBotState["BETWEEN_TRADES"] = "BETWEEN_TRADES";
    TradingBotState["SETTING_UP_TRADE"] = "SETTING_UP_TRADE";
    TradingBotState["PAUSED"] = "PAUSED";
    TradingBotState["FINISHED"] = "FINISHED"; // Bot has exited currency trading due to loss or decreasing price
})(TradingBotState = exports.TradingBotState || (exports.TradingBotState = {}));
var PositionState;
(function (PositionState) {
    PositionState["BUY"] = "BUY";
    PositionState["HOLD"] = "HOLD";
    PositionState["SELL"] = "SELL";
    PositionState["SOLD"] = "SOLD";
    PositionState["TIMEOUT_SELL"] = "TIMEOUT_SELL";
})(PositionState = exports.PositionState || (exports.PositionState = {}));
var SymbolType;
(function (SymbolType) {
    SymbolType["NONE"] = "NONE";
    SymbolType["CLIMBER"] = "CLIMBER";
    SymbolType["LEAPER"] = "LEAPER";
    SymbolType["HIGHEST_GAINER"] = "HIGHEST_GAINER";
    SymbolType["AVERAGE_GAINER"] = "AVERAGE_GAINER";
    SymbolType["LONG_TRADE"] = "LONG_TRADE";
})(SymbolType = exports.SymbolType || (exports.SymbolType = {}));
var LongTradeBotState;
(function (LongTradeBotState) {
    LongTradeBotState["GATHERING_DATA"] = "GATHERING_DATA";
    LongTradeBotState["EVALUATING"] = "EVALUATING";
    LongTradeBotState["WAIT"] = "WAIT";
    LongTradeBotState["BUY"] = "BUY";
    LongTradeBotState["SELL"] = "SELL";
    LongTradeBotState["HOLD"] = "HOLD";
    LongTradeBotState["ABANDON"] = "ABANDON";
})(LongTradeBotState = exports.LongTradeBotState || (exports.LongTradeBotState = {}));
var VALUE_LOG_INTERVAL;
(function (VALUE_LOG_INTERVAL) {
    VALUE_LOG_INTERVAL["MINUTE"] = "MINUTE";
    VALUE_LOG_INTERVAL["HOUR"] = "HOUR";
    VALUE_LOG_INTERVAL["DAY"] = "DAY";
})(VALUE_LOG_INTERVAL = exports.VALUE_LOG_INTERVAL || (exports.VALUE_LOG_INTERVAL = {}));
