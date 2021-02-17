import { DBItem } from './db';

export interface WalletValue {
	value: string;
	time: string;
}

export interface WalletValuation extends DBItem {
	walletValuationId: string;
	userId: string;
	values: WalletValue[];
	times: {
		createdAt: string;
		updatedAt?: string;
		valueStartingAt: string;
		valueEndingAt?: string;
	}
}
