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
})(PositionState = exports.PositionState || (exports.PositionState = {}));
