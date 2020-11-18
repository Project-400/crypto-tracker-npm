import { BinanceOrderStatus, BinanceTimeInForce, BinanceTransactionSide, BinanceTransactionType } from '../enums';
import { TransactionFill } from './objects';
export interface ExchangeCurrencyTransactionAck {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
}
export interface ExchangeCurrencyTransactionResult extends ExchangeCurrencyTransactionAck {
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: BinanceOrderStatus;
    timeInForce: BinanceTimeInForce;
    type: BinanceTransactionType;
    side: BinanceTransactionSide;
}
export interface ExchangeCurrencyTransactionFull extends ExchangeCurrencyTransactionResult {
    fills: TransactionFill[];
}
