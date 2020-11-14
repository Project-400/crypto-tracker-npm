export declare enum TradingBotState {
    WAITING = "WAITING",
    STARTING = "STARTING",
    TRADING = "TRADING",
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
