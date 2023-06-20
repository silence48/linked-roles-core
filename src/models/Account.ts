import { Model } from 'model-one'
import { accountSchema } from '../database/Schema'
import { AccountDataI, AccountI } from '../interfaces/models'

export class Account extends Model implements AccountI {
  data: AccountDataI

  constructor(props: AccountDataI) {
    super(accountSchema, props)
    this.data = props
  }
}
