import { TransactionFill } from './objects';

export interface CommissionTotals {
	[symbol: string]: number;
}

export interface IBotTradeData {
	tradeDataId: string;								// The unique ID for this instance of trade data
	botId: string;										// The unique Bot ID
	symbol: string;										// Trading pair symbol, eg. BTCUSDT
	base: string;										// Base currency (The currency being bought), eg. BTC
	quote: string;										// Quote currency (The currency being used to spend / trade for the base), eg. USDT
	startedTrading: boolean;							// Flag to indicate if trading has started (base currency has been bought)
	finishedTrading: boolean;							// Flag to indicate if trading has ended (base currency has been bought)
	buyDataSet: boolean;								// Flag to indicate if buy has occurred and data is set
	sellDataSet: boolean;								// Flag to indicate if sell has occurred and data is set
	baseQty: number;									// Amount of base currency currently being traded
	quoteQty: number;									// Amount of quote currency being used to trade with (Limit set by bot)
	profit: number;										// Current / final amount of profit made (measured in the quote currency)
	startPrice: number;									// Price of the base (measured in quote) for the initial trade
	currentPrice: number;								// Current price of the base (measured in quote)
	highestPriceReached: number;						// Highest price of the base (measured in quote) reached during trading
	lowestPriceReached: number;							// Lowest price of the base (measured in quote) reached during trading
	highestPriceReachedDuringTrade: number;				// Highest price of the base (measured in quote) reached during trading
	lowestPriceReachedDuringTrade: number;				// Lowest price of the base (measured in quote) reached during trading
	highestBuyPrice: number;							// Highest price paid for buying the base currency
	lowestBuyPrice: number;								// Lowest price paid for buying the base currency
	averageBuyPrice: number;							// Average price paid for buying the base currency
	highestSellPrice: number;							// Highest price received for selling the base currency
	lowestSellPrice: number;							// Lowest price received for selling the base currency
	averageSellPrice: number;							// Average price received for selling the base currency
	priceDifference: number;							// Difference in price of the base from the start to the current
	percentageDifference: number;						// Percentage difference in price of the base from the start to the current
	percentageDroppedFromHigh: number;					// Percentage difference in price of the base from the highest price to the current
	buyFills: TransactionFill[];						// A list of buy fills (sub-transactions that make up the total transaction) by Binance
	sellFills: TransactionFill[];						// A list of sell fills (sub-transactions that make up the total transaction) by Binance
	commissions: CommissionTotals;						// A map of commissions totals taken by Binance
	baseMinQty: number;									// Minimum amount of the base that can be purchased
	baseStepSize: number;								// Minimum step size (rounding value) of the base that can be purchased
	startTime: number;									// Time the trading began (For calculations)
	quoteAssetPrecision: number;						// Rounding precision for quote currency
	baseAssetPrecision: number;							// Rounding precision for base currency
	times: {											// Times actions occurred (For DB records)
		createdAt?: string;										// Time trade data object created
		finishedAt?: string;									// Time trade data finished
		buyAt?: string;											// Time buy action started
		sellAt?: string;										// Time sell action started
		savedAt?: string;										// Time the trade data object was saved in the DB
		buyTransactionAt?: string;								// Time Binance performed buy transaction
		sellTransactionAt?: string;								// Time Binance performed sell transaction
		highestPriceReachedAt?: string;							// Time highest price reached during trade data lifetime
		lowestPriceReachedAt?: string;							// Time lowest price reached during trade data lifetime
		highestPriceReachedDuringTradeAt?: string;				// Time highest price reached during trade
		lowestPriceReachedDuringTradeAt?: string;				// Time lowest price reached during trade
		lastPriceUpdateAt?: string;								// Time the price last updated during trade
	};
	buyTransactionType?: string;						// Buy Transaction type, eg. MARKET
	sellTransactionType?: string;						// Sell Transaction type, eg. MARKET
	sellQty?: string;									// Quantity of the base being sold
	priceChangeCount: number;							// The amount of times the price updated during the trade
	preTradePriceChangeCount: number;					// The amount of times the price updated before the trade
	priceChangeInterval: number; 						// The interval gap between expected price updates
}
