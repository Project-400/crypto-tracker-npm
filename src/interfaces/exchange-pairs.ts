import { DBItem } from './db';

export interface SymbolPairs extends DBItem { // All symbol pairs in single entity
	pairs: {
		[symbol: string]: string[];
	};
	times: {
		createdAt: string;
		updatedAt: string;
	};
}

/*

	Example:

	{
		ALPHA: [ 'BTC', 'USDT', 'ETH' ],
		SUSHI: [ 'BTC', 'USDT', 'BNB' ]
	}

* */
