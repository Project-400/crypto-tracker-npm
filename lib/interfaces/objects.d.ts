import { PositionState, TradingBotState } from '../enums';
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
}
export interface ISymbolTraderData {
    symbol: string;
    base: string;
    quote: string;
    lowercaseSymbol: string;
    baseQty: number;
    quoteQty: number;
    profit: number;
    startPrice: number;
    currentPrice: number;
    priceDifference: number;
    percentageDifference: number;
    commissions: TransactionFillCommission[];
    state: PositionState;
    exchangeInfo?: ExchangeInfoSymbol;
    baseMinQty: number;
    baseStepSize: number;
    times: {
        createdAt: Date | string;
        finishedAt?: Date | string;
        savedAt?: Date | string;
    };
}
export interface TransactionFillCommission {
    commission: number;
    commissionAsset: string;
}
