export interface PairPrice {
    symbol: string;
    price: number;
}
export interface PriceBatch {
    prices: PairPrice[];
    quote: string;
    times: {
        createdAt: string;
    };
}
