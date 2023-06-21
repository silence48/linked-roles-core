import { Model } from 'model-one';
import type { CursorI, CursorDataI } from '../interfaces/types';
export declare class Cursor extends Model implements CursorI {
    data: CursorDataI;
    constructor(props: CursorDataI);
}
