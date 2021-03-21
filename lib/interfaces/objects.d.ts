import { ExchangeInfoFilterType, PositionState, SymbolType, TradingBotState } from '../enums';
import { DBItem } from './db';
export interface CryptoTradingBot {
    symbol: string;
    quote: string;
    base: string;
    spendLimit: number;
    isSpendLimited: boolean;
    currentSpend: number;
    profits: number;
    state: TradingBotState;
}
export interface ExchangeInfoFilter {
    filterType: ExchangeInfoFilterType;
    minPrice?: string;
    maxPrice?: string;
    tickSize?: string;
    multiplierUp?: string;
    multiplierDown?: string;
    avgPriceMins?: number;
    minQty?: string;
    maxQty?: string;
    stepSize?: string;
    minNotional?: string;
    applyToMarket?: boolean;
    limit?: number;
    maxNumOrders?: number;
    maxNumAlgoOrders?: number;
    maxNumIcebergOrders?: number;
    maxPosition?: string;
}
export interface ExchangeInfoSymbol extends DBItem {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: ExchangeInfoFilter[];
    permissions: string[];
    times: {
        createdAt: string;
        updatedAt: string;
    };
}
export interface ITraderBotLogData extends DBItem {
    bot: {
        botId: string;
        createdAt: string;
    };
    symbol: string;
    base: string;
    quote: string;
    lowercaseSymbol: string;
    baseQty: number;
    baseInitialQty: number;
    quoteQty: number;
    quoteQtySpent: number;
    profit: number;
    startPrice: number;
    currentPrice: number;
    priceDifference: number;
    percentageDifference: number;
    commissions: TransactionFill[];
    state: PositionState;
    exchangeInfo?: ExchangeInfoSymbol;
    baseMinQty: number;
    baseStepSize: number;
    highestPriceReached: number;
    lowestPriceReached: number;
    percentageDroppedFromHigh: number;
    symbolType: SymbolType;
    times: {
        createdAt: string;
        finishedAt?: string;
        savedAt?: string;
    };
    userId?: string;
}
export interface ISymbolTraderData {
    symbol: string;
    base: string;
    quote: string;
    lowercaseSymbol: string;
    baseQty: number;
    baseInitialQty: number;
    quoteQty: number;
    quoteQtySpent: number;
    profit: number;
    startPrice: number;
    currentPrice: number;
    priceDifference: number;
    percentageDifference: number;
    commissions: TransactionFill[];
    state: PositionState;
    exchangeInfo?: ExchangeInfoSymbol;
    baseMinQty: number;
    baseStepSize: number;
    highestPriceReached: number;
    lowestPriceReached: number;
    percentageDroppedFromHigh: number;
    times: {
        createdAt: Date | string;
        finishedAt?: Date | string;
        savedAt?: Date | string;
    };
}
export interface TransactionFill {
    commission: string;
    commissionAsset: string;
    price: string;
    qty: string;
    tradeId: number;
}
export interface Trade {
    symbol: string;
    id: number;
    orderId: number;
    orderListId: number;
    price: number;
    qty: number;
    quoteQty: number;
    commission: number;
    commissionAsset: string;
    time: number;
    isBuyer: boolean;
    isMaker: boolean;
    isBestMatch: boolean;
}
export interface CurrencySuggestion {
    symbol: string;
    suggestionTime: string;
    expirationTime: string;
    percentageIncrease: number;
    timePeriodAnalysis: string;
}
