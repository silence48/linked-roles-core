import { Model } from 'model-one';
import type { ClaimableI, ClaimableDataI } from '../interfaces/types';
export declare class Claimable extends Model implements ClaimableI {
    data: ClaimableDataI;
    constructor(props: ClaimableDataI);
}
