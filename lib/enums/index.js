"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TradingBotState;
(function (TradingBotState) {
    TradingBotState[TradingBotState["WAITING"] = 0] = "WAITING";
    TradingBotState[TradingBotState["TRADING"] = 1] = "TRADING";
    TradingBotState[TradingBotState["PAUSED"] = 2] = "PAUSED";
    TradingBotState[TradingBotState["FINISHED"] = 3] = "FINISHED"; // Bot has exited currency trading due to loss or decreasing price
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
