"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeInfoFilterType = exports.LongTradeBotState = exports.SymbolType = exports.PositionState = exports.TradingBotState = void 0;
var TradingBotState;
(function (TradingBotState) {
    TradingBotState["WAITING"] = "WAITING";
    TradingBotState["STARTING"] = "STARTING";
    TradingBotState["TRADING"] = "TRADING";
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
var ExchangeInfoFilterType;
(function (ExchangeInfoFilterType) {
    ExchangeInfoFilterType["PRICE_FILTER"] = "PRICE_FILTER";
    ExchangeInfoFilterType["PERCENT_PRICE"] = "PERCENT_PRICE";
    ExchangeInfoFilterType["LOT_SIZE"] = "LOT_SIZE";
    ExchangeInfoFilterType["MIN_NOTIONAL"] = "MIN_NOTIONAL";
    ExchangeInfoFilterType["ICEBERG_PARTS"] = "ICEBERG_PARTS";
    ExchangeInfoFilterType["MAX_NUM_ORDERS"] = "MAX_NUM_ORDERS";
    ExchangeInfoFilterType["MAX_NUM_ALGO_ORDERS"] = "MAX_NUM_ALGO_ORDERS";
    ExchangeInfoFilterType["MAX_NUM_ICEBERG_ORDERS"] = "MAX_NUM_ICEBERG_ORDERS";
    ExchangeInfoFilterType["MAX_POSITION"] = "MAX_POSITION";
    ExchangeInfoFilterType["EXCHANGE_MAX_NUM_ORDERS"] = "EXCHANGE_MAX_NUM_ORDERS";
    ExchangeInfoFilterType["EXCHANGE_MAX_ALGO_ORDERS"] = "EXCHANGE_MAX_ALGO_ORDERS";
})(ExchangeInfoFilterType = exports.ExchangeInfoFilterType || (exports.ExchangeInfoFilterType = {}));
