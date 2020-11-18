"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceTimeInForce = exports.BinanceOrderStatus = exports.BinanceTransactionType = exports.BinanceTransactionSide = exports.ExchangeInfoFilterType = exports.BinanceRateInterval = exports.BinanceRateLimitType = void 0;
var BinanceRateLimitType;
(function (BinanceRateLimitType) {
    BinanceRateLimitType["REQUEST_WEIGHT"] = "REQUEST_WEIGHT";
    BinanceRateLimitType["ORDERS"] = "ORDERS";
    BinanceRateLimitType["RAW_REQUESTS"] = "RAW_REQUESTS";
})(BinanceRateLimitType = exports.BinanceRateLimitType || (exports.BinanceRateLimitType = {}));
var BinanceRateInterval;
(function (BinanceRateInterval) {
    BinanceRateInterval["SECOND"] = "SECOND";
    BinanceRateInterval["MINUTE"] = "MINUTE";
    BinanceRateInterval["DAY"] = "DAY";
})(BinanceRateInterval = exports.BinanceRateInterval || (exports.BinanceRateInterval = {}));
var ExchangeInfoFilterType;
(function (ExchangeInfoFilterType) {
    ExchangeInfoFilterType["PRICE_FILTER"] = "PRICE_FILTER";
    ExchangeInfoFilterType["PERCENT_PRICE"] = "PERCENT_PRICE";
    ExchangeInfoFilterType["LOT_SIZE"] = "LOT_SIZE";
    ExchangeInfoFilterType["MIN_NOTIONAL"] = "MIN_NOTIONAL";
    ExchangeInfoFilterType["ICEBERG_PARTS"] = "ICEBERG_PARTS";
    ExchangeInfoFilterType["MARKET_LOT_SIZE"] = "MARKET_LOT_SIZE";
    ExchangeInfoFilterType["MAX_NUM_ORDERS"] = "MAX_NUM_ORDERS";
    ExchangeInfoFilterType["MAX_NUM_ALGO_ORDERS"] = "MAX_NUM_ALGO_ORDERS";
    ExchangeInfoFilterType["MAX_NUM_ICEBERG_ORDERS"] = "MAX_NUM_ICEBERG_ORDERS";
    ExchangeInfoFilterType["MAX_POSITION"] = "MAX_POSITION";
    ExchangeInfoFilterType["EXCHANGE_MAX_NUM_ORDERS"] = "EXCHANGE_MAX_NUM_ORDERS";
    ExchangeInfoFilterType["EXCHANGE_MAX_ALGO_ORDERS"] = "EXCHANGE_MAX_ALGO_ORDERS";
})(ExchangeInfoFilterType = exports.ExchangeInfoFilterType || (exports.ExchangeInfoFilterType = {}));
var BinanceTransactionSide;
(function (BinanceTransactionSide) {
    BinanceTransactionSide["BUY"] = "BUY";
    BinanceTransactionSide["SELL"] = "SELL";
})(BinanceTransactionSide = exports.BinanceTransactionSide || (exports.BinanceTransactionSide = {}));
var BinanceTransactionType;
(function (BinanceTransactionType) {
    BinanceTransactionType["MARKET"] = "MARKET";
    BinanceTransactionType["LIMIT"] = "LIMIT";
    BinanceTransactionType["STOP_LOSS"] = "STOP_LOSS";
    BinanceTransactionType["STOP_LOSS_LIMIT"] = "STOP_LOSS_LIMIT";
    BinanceTransactionType["TAKE_PROFIT"] = "TAKE_PROFIT";
    BinanceTransactionType["TAKE_PROFIT_LIMIT"] = "TAKE_PROFIT_LIMIT";
    BinanceTransactionType["LIMIT_MAKER"] = "LIMIT_MAKER";
})(BinanceTransactionType = exports.BinanceTransactionType || (exports.BinanceTransactionType = {}));
var BinanceOrderStatus;
(function (BinanceOrderStatus) {
    BinanceOrderStatus["NEW"] = "NEW";
    BinanceOrderStatus["PARTIALLY_FILLED"] = "PARTIALLY_FILLED";
    BinanceOrderStatus["FILLED"] = "FILLED";
    BinanceOrderStatus["CANCELED"] = "CANCELED";
    BinanceOrderStatus["PENDING_CANCEL"] = "PENDING_CANCEL";
    BinanceOrderStatus["REJECTED"] = "REJECTED";
    BinanceOrderStatus["EXPIRED"] = "EXPIRED";
})(BinanceOrderStatus = exports.BinanceOrderStatus || (exports.BinanceOrderStatus = {}));
var BinanceTimeInForce;
(function (BinanceTimeInForce) {
    BinanceTimeInForce["GTC"] = "GTC";
    BinanceTimeInForce["IOC"] = "IOC";
    BinanceTimeInForce["FOK"] = "FOK";
})(BinanceTimeInForce = exports.BinanceTimeInForce || (exports.BinanceTimeInForce = {}));
