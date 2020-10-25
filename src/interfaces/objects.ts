import { PositionState, SymbolType, TradingBotState } from '../enums';
import { DBItem } from './db';

export interface CryptoTradingBot {
    symbol: string; // Pair symbol, eg. BTCUSDT
    quote: string; // Currency being used to buy base, eg. USDT
    base: string; // Currency being bought, eg. BTC
    spendLimit: number; // Limited amount of quote currency to use
    isSpendLimited: boolean; // Is the bot limited to spendLimit
    currentSpend: number; // Current amount of quote currency being used
    profits: number; // Total profits / loss in quote currency
    state: TradingBotState; // Current state of bot
}

export interface ExchangeInfoSymbol {
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
    filters: any[];
    permissions: string[];
    times: {
        createdAt: string;
        updatedAt: string;
    }
}

export interface ITraderBotLogData extends DBItem { // Previously ISymbolTraderData
    bot: {
        botId: string;
        createdAt: string;
    };
    symbol: string;
    base: string;
    quote: string;
    lowercaseSymbol: string;
    baseQty: number; // Current / leftover
    baseInitialQty: number; // Amount bought
    quoteQty: number; // Quote spent / Profits (Quote only, not including minus commission from base - after complete)
    quoteQtySpent: number;
    profit: number; // Remove base from quoteQty (convert to calculate)
    startPrice: number;
    currentPrice: number;
    priceDifference: number;
    percentageDifference: number;
    commissions: TransactionFillCommission[];
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
    }
    userId?: string;
}

export interface TransactionFillCommission {
    commission: number;
    commissionAsset: string;
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
