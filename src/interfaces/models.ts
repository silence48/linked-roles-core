import { Model } from 'model-one';

export interface AccountDataI {
  id?: string;
}

export interface AccountI extends Model {
  data: AccountDataI;
}
