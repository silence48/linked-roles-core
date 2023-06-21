import { Model } from 'model-one';
import type { AssetI, AssetDataI } from '../interfaces/types';
export declare class Asset extends Model implements AssetI {
    data: AssetDataI;
    constructor(props: AssetI);
}
