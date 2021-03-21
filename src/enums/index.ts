export * from './binance';

export enum TradingBotState {
    STARTING = 'STARTING', // Setting up
    WAITING = 'WAITING', // Waiting to trade
    WAITING_TO_REPEAT = 'WAITING_TO_REPEAT', // Bot has finished trading at least once and is ready to trade again
    TRADING = 'TRADING', // Bot has bought currency and watching for profit / loss
    BETWEEN_TRADES = 'BETWEEN_TRADES', // Bot is repeatedly trading, has sold currency and is waiting to buy again
    SETTING_UP_TRADE = 'SETTING_UP_TRADE', // Bot is buying or setting up data
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

export enum VALUE_LOG_INTERVAL {
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
