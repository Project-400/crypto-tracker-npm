export * from './binance';
export declare enum TradingBotState {
    STARTING = "STARTING",
    WAITING = "WAITING",
    WAITING_TO_REPEAT = "WAITING_TO_REPEAT",
    TRADING = "TRADING",
    BETWEEN_TRADES = "BETWEEN_TRADES",
    SETTING_UP_TRADE = "SETTING_UP_TRADE",
    PAUSED = "PAUSED",
    FINISHED = "FINISHED"
}
export declare enum PositionState {
    BUY = "BUY",
    HOLD = "HOLD",
    SELL = "SELL",
    SOLD = "SOLD",
    TIMEOUT_SELL = "TIMEOUT_SELL"
}
export declare enum SymbolType {
    NONE = "NONE",
    CLIMBER = "CLIMBER",
    LEAPER = "LEAPER",
    HIGHEST_GAINER = "HIGHEST_GAINER",
    AVERAGE_GAINER = "AVERAGE_GAINER",
    LONG_TRADE = "LONG_TRADE"
}
export declare enum LongTradeBotState {
    GATHERING_DATA = "GATHERING_DATA",
    EVALUATING = "EVALUATING",
    WAIT = "WAIT",
    BUY = "BUY",
    SELL = "SELL",
    HOLD = "HOLD",
    ABANDON = "ABANDON"
}
export declare enum VALUE_LOG_INTERVAL {
    MINUTE = "MINUTE",
    HOUR = "HOUR",
    DAY = "DAY"
}
