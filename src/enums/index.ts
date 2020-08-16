export enum TradingBotState {
    WAITING, // Waiting to trade
    TRADING, // Bot has bought currency and watching for profit / loss
    PAUSED, // Sold currency due to drop in price - Holding out until price increases
    FINISHED // Bot has exited currency trading due to loss or decreasing price
}
