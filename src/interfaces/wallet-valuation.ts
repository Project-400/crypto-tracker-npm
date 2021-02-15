export interface WalletValue {
	value: string;
	time: string;
}

export interface WalletValuation {
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
