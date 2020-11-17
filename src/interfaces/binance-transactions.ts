import { BinanceOrderStatus, BinanceTimeInForce, BinanceTransactionSide, BinanceTransactionType } from '../enums';
import { TransactionFill } from './objects';

/*
*
* This is for both buying and selling currency
*
* https://binance-docs.github.io/apidocs/spot/en/#test-new-order-trade
*
* */

export interface ExchangeCurrencyTransactionAck { // newOrderRespType set to ACK
	symbol: string;
	orderId: number;
	orderListId: number; // Unless OCO, value will be -1
	clientOrderId: string;
	transactTime: number;
}

export interface ExchangeCurrencyTransactionResult extends ExchangeCurrencyTransactionAck { // newOrderRespType set to RESULT
	price: string; // Numeric
	origQty: string; // Numeric
	executedQty: string; // Numeric
	cummulativeQuoteQty: string; // Numeric
	status: BinanceOrderStatus;
	timeInForce: BinanceTimeInForce;
	type: BinanceTransactionType;
	side: BinanceTransactionSide;
}

export interface ExchangeCurrencyTransactionFull extends ExchangeCurrencyTransactionResult { // Full Dto is returned when order type is MARKET or LIMIT or newOrderRespType set to FULL
	fills: TransactionFill[];
}
