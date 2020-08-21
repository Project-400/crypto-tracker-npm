export declare enum TradingBotState {
    WAITING = 0,
    TRADING = 1,
    PAUSED = 2,
    FINISHED = 3
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
    AVERAGE_GAINER = "AVERAGE_GAINER"
}
