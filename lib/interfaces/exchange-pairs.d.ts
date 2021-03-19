import { DBItem } from './db';
export interface SymbolPairs extends DBItem {
    pairs: {
        [symbol: string]: string[];
    };
    times: {
        createdAt: string;
        updatedAt: string;
    };
}
