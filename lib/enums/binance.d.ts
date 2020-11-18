export declare enum BinanceRateLimitType {
    REQUEST_WEIGHT = "REQUEST_WEIGHT",
    ORDERS = "ORDERS",
    RAW_REQUESTS = "RAW_REQUESTS"
}
export declare enum BinanceRateInterval {
    SECOND = "SECOND",
    MINUTE = "MINUTE",
    DAY = "DAY"
}
export declare enum ExchangeInfoFilterType {
    PRICE_FILTER = "PRICE_FILTER",
    PERCENT_PRICE = "PERCENT_PRICE",
    LOT_SIZE = "LOT_SIZE",
    MIN_NOTIONAL = "MIN_NOTIONAL",
    ICEBERG_PARTS = "ICEBERG_PARTS",
    MARKET_LOT_SIZE = "MARKET_LOT_SIZE",
    MAX_NUM_ORDERS = "MAX_NUM_ORDERS",
    MAX_NUM_ALGO_ORDERS = "MAX_NUM_ALGO_ORDERS",
    MAX_NUM_ICEBERG_ORDERS = "MAX_NUM_ICEBERG_ORDERS",
    MAX_POSITION = "MAX_POSITION",
    EXCHANGE_MAX_NUM_ORDERS = "EXCHANGE_MAX_NUM_ORDERS",
    EXCHANGE_MAX_ALGO_ORDERS = "EXCHANGE_MAX_ALGO_ORDERS"
}
export declare enum BinanceTransactionSide {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum BinanceTransactionType {
    MARKET = "MARKET",
    LIMIT = "LIMIT",
    STOP_LOSS = "STOP_LOSS",
    STOP_LOSS_LIMIT = "STOP_LOSS_LIMIT",
    TAKE_PROFIT = "TAKE_PROFIT",
    TAKE_PROFIT_LIMIT = "TAKE_PROFIT_LIMIT",
    LIMIT_MAKER = "LIMIT_MAKER"
}
export declare enum BinanceOrderStatus {
    NEW = "NEW",
    PARTIALLY_FILLED = "PARTIALLY_FILLED",
    FILLED = "FILLED",
    CANCELED = "CANCELED",
    PENDING_CANCEL = "PENDING_CANCEL",
    REJECTED = "REJECTED",
    EXPIRED = "EXPIRED"
}
export declare enum BinanceTimeInForce {
    GTC = "GTC",
    IOC = "IOC",
    FOK = "FOK"
}
