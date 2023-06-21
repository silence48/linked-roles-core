"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
const model_one_1 = require("model-one");
const balancesSchema = new model_one_1.Schema({
    table_name: 'balances',
    columns: [
        { name: 'id', type: 'string' },
        { name: 'tx_id', type: 'string' },
        { name: 'issuer_id', type: 'string' },
        { name: 'asset_id', type: 'string' },
        { name: 'account_id', type: 'string' },
        { name: 'balance', type: 'string' },
        { name: 'date_acquired', type: 'string' },
        { name: 'verified_ownership', type: 'string' },
    ]
});
class Balance extends model_one_1.Model {
    constructor(props) {
        super(balancesSchema, props);
        this.data = props;
    }
}
exports.Balance = Balance;
//# sourceMappingURL=Balance.js.map