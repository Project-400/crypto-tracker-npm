import { VALUE_LOG_INTERVAL } from '../enums';
import { DBItem } from './db';

export interface WalletValue extends DBItem {
	value: string;
	time: string;
	interval: VALUE_LOG_INTERVAL;
	klineValues?: {
		open: string;
		close: string;
		lowest: string;
		highest: string;
	},
	times: {
		createdAt: string;
	}
}

// export interface WalletValuation extends DBItem {
// 	walletValuationId: string;
// 	userId: string;
// 	values: WalletValue[];
// 	times: {
// 		createdAt: string;
// 		updatedAt?: string;
// 		valueStartingAt: string;
// 		valueEndingAt?: string;
// 	}
// }
