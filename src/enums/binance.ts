export enum BinanceRateLimitType {
	REQUEST_WEIGHT = 'REQUEST_WEIGHT',
	ORDERS = 'ORDERS',
	RAW_REQUESTS = 'RAW_REQUESTS'
}

export enum BinanceRateInterval {
	SECOND = 'SECOND',
	MINUTE = 'MINUTE',
	DAY = 'DAY'
}

export enum ExchangeInfoFilterType { // https://binance-docs.github.io/apidocs/spot/en/#filters
	PRICE_FILTER = 'PRICE_FILTER',
	PERCENT_PRICE = 'PERCENT_PRICE',
	LOT_SIZE = 'LOT_SIZE',
	MIN_NOTIONAL = 'MIN_NOTIONAL',
	ICEBERG_PARTS = 'ICEBERG_PARTS',
	MARKET_LOT_SIZE = 'MARKET_LOT_SIZE',
	MAX_NUM_ORDERS = 'MAX_NUM_ORDERS',
	MAX_NUM_ALGO_ORDERS = 'MAX_NUM_ALGO_ORDERS',
	MAX_NUM_ICEBERG_ORDERS = 'MAX_NUM_ICEBERG_ORDERS',
	MAX_POSITION = 'MAX_POSITION',
	EXCHANGE_MAX_NUM_ORDERS = 'EXCHANGE_MAX_NUM_ORDERS',
	EXCHANGE_MAX_ALGO_ORDERS = 'EXCHANGE_MAX_ALGO_ORDERS'
}

export enum BinanceTransactionSide {
	BUY = 'BUY',
	SELL = 'SELL'
}

export enum BinanceTransactionType {
	MARKET = 'MARKET',
	LIMIT = 'LIMIT',
	STOP_LOSS = 'STOP_LOSS',
	STOP_LOSS_LIMIT = 'STOP_LOSS_LIMIT',
	TAKE_PROFIT = 'TAKE_PROFIT',
	TAKE_PROFIT_LIMIT = 'TAKE_PROFIT_LIMIT',
	LIMIT_MAKER = 'LIMIT_MAKER'
}

export enum BinanceOrderStatus { // https://binance-docs.github.io/apidocs/spot/en/#public-api-definitions
	NEW = 'NEW',
	PARTIALLY_FILLED = 'PARTIALLY_FILLED',
	FILLED = 'FILLED',
	CANCELED = 'CANCELED',
	PENDING_CANCEL = 'PENDING_CANCEL',
	REJECTED = 'REJECTED',
	EXPIRED = 'EXPIRED'
}

export enum BinanceTimeInForce { // https://binance-docs.github.io/apidocs/spot/en/#public-api-definitions
	GTC = 'GTC',
	IOC = 'IOC',
	FOK = 'FOK'
}
