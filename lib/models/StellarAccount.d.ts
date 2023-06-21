import { Model } from 'model-one';
import type { StellarAccountsI, StellarAccountsDataI } from '../interfaces/types';
export declare class StellarAccount extends Model implements StellarAccountsI {
    data: StellarAccountsDataI;
    constructor(props: StellarAccountsDataI);
}
