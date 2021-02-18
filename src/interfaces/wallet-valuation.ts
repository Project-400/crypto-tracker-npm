import { VALUE_LOG_INTERVAL } from '../enums';
import { DBItem } from './db';

export interface WalletValue extends DBItem {
	value: string;
	time: string;
	interval: VALUE_LOG_INTERVAL;
	isClosed: boolean;
	klineValues?: {
		open: string;
		close?: string;
		lowest: string;
		highest: string;
	},
	times: {
		createdAt: string;
		updatedAt?: string;
		valueStartingAt?: string;
 		valueEndingAt?: string;
	}
}

export interface KlineValues extends DBItem { // Move to own file
	time: string;
	updateCount: number;
	open: string;
	close?: string;
	lowest: string;
	highest: string;
	average: string;
	interval: VALUE_LOG_INTERVAL;
	isClosed: boolean;
	times: {
		createdAt: string;
		updatedAt?: string;
		valueStartingAt?: string;
		valueEndingAt?: string;
	}
}
