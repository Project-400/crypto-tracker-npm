interface SeparatedPriceBatches {
    USDT: PairPrice[],
    BTC: PairPrice[],
    BNB: PairPrice[],
    ETH: PairPrice[],
    XRP: PairPrice[],
    BUSD: PairPrice[],
    TUSD: PairPrice[],
    USDC: PairPrice[],
    PAX: PairPrice[],
    EUR: PairPrice[],
    GBP: PairPrice[],
    OTHER: PairPrice[]
}

export interface PairPrice {
    symbol: string;
    price: number;
}

export interface PriceBatch {
    prices: PairPrice[];
    quote: string;
    times: {
        createdAt: Date | string;
    };
}
