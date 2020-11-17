export enum TradingBotState {
    WAITING = 'WAITING', // Waiting to trade
    STARTING = 'STARTING', // Setting up
    TRADING = 'TRADING', // Bot has bought currency and watching for profit / loss
    PAUSED = 'PAUSED', // Sold currency due to drop in price - Holding out until price increases
    FINISHED = 'FINISHED' // Bot has exited currency trading due to loss or decreasing price
}

export enum PositionState {
    BUY = 'BUY',
    HOLD = 'HOLD',
    SELL = 'SELL',
    SOLD = 'SOLD',
    TIMEOUT_SELL = 'TIMEOUT_SELL'
}

export enum SymbolType {
    NONE = 'NONE',
    CLIMBER = 'CLIMBER',
    LEAPER = 'LEAPER',
    HIGHEST_GAINER = 'HIGHEST_GAINER',
    AVERAGE_GAINER = 'AVERAGE_GAINER',
    LONG_TRADE = 'LONG_TRADE'
}

export enum LongTradeBotState {
    GATHERING_DATA = 'GATHERING_DATA',
    EVALUATING = 'EVALUATING',
    WAIT = 'WAIT', // Sold currency, waiting to buy
    BUY = 'BUY',
    SELL = 'SELL',
    HOLD = 'HOLD', // Holding currency
    ABANDON = 'ABANDON'
}

export enum ExchangeInfoFilterType { // https://binance-docs.github.io/apidocs/spot/en/#filters
    PRICE_FILTER = 'PRICE_FILTER',
    PERCENT_PRICE = 'PERCENT_PRICE',
    LOT_SIZE = 'LOT_SIZE',
    MIN_NOTIONAL = 'MIN_NOTIONAL',
    ICEBERG_PARTS = 'ICEBERG_PARTS',
    MAX_NUM_ORDERS = 'MAX_NUM_ORDERS',
    MAX_NUM_ALGO_ORDERS = 'MAX_NUM_ALGO_ORDERS',
    MAX_NUM_ICEBERG_ORDERS = 'MAX_NUM_ICEBERG_ORDERS',
    MAX_POSITION = 'MAX_POSITION',
    EXCHANGE_MAX_NUM_ORDERS = 'EXCHANGE_MAX_NUM_ORDERS',
    EXCHANGE_MAX_ALGO_ORDERS = 'EXCHANGE_MAX_ALGO_ORDERS'
}
