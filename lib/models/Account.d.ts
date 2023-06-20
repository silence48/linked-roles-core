import { Model } from 'model-one';
import { AccountDataI, AccountI } from '../interfaces/models';
export declare class Account extends Model implements AccountI {
    data: AccountDataI;
    constructor(props: AccountDataI);
}
