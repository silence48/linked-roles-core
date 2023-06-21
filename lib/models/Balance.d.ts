import { Model } from 'model-one';
import type { BalanceI, BalanceDataI } from '../interfaces/types';
export declare class Balance extends Model implements BalanceI {
    data: BalanceDataI;
    constructor(props: BalanceDataI);
}
