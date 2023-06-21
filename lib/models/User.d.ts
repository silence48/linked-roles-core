import { Model } from 'model-one';
import type { UserI, UserDataI } from '../interfaces/types';
export declare class User extends Model implements UserI {
    data: UserDataI;
    constructor(props: UserDataI);
}
