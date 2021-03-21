import { TransactionFill } from './objects';
export interface CommissionTotals {
    [symbol: string]: number;
}
export interface IBotTradeData {
    tradeDataId: string;
    botId: string;
    symbol: string;
    base: string;
    quote: string;
    startedTrading: boolean;
    finishedTrading: boolean;
    buyDataSet: boolean;
    sellDataSet: boolean;
    baseQty: number;
    quoteQty: number;
    profit: number;
    startPrice: number;
    currentPrice: number;
    highestPriceReached: number;
    lowestPriceReached: number;
    highestPriceReachedDuringTrade: number;
    lowestPriceReachedDuringTrade: number;
    highestBuyPrice: number;
    lowestBuyPrice: number;
    averageBuyPrice: number;
    highestSellPrice: number;
    lowestSellPrice: number;
    averageSellPrice: number;
    priceDifference: number;
    percentageDifference: number;
    percentageDroppedFromHigh: number;
    buyFills: TransactionFill[];
    sellFills: TransactionFill[];
    commissions: CommissionTotals;
    baseMinQty: number;
    baseStepSize: number;
    startTime: number;
    quoteAssetPrecision: number;
    baseAssetPrecision: number;
    times: {
        createdAt?: string;
        finishedAt?: string;
        buyAt?: string;
        sellAt?: string;
        savedAt?: string;
        buyTransactionAt?: string;
        sellTransactionAt?: string;
        highestPriceReachedAt?: string;
        lowestPriceReachedAt?: string;
        highestPriceReachedDuringTradeAt?: string;
        lowestPriceReachedDuringTradeAt?: string;
        lastPriceUpdateAt?: string;
    };
    buyTransactionType?: string;
    sellTransactionType?: string;
    sellQty?: string;
    priceChangeCount: number;
    preTradePriceChangeCount: number;
    priceChangeInterval: number;
}
