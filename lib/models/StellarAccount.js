"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StellarAccount = void 0;
const model_one_1 = require("model-one");
const stellar_accountsSchema = new model_one_1.Schema({
    table_name: 'stellar_accounts',
    columns: [
        { name: 'id', type: 'string' },
        { name: 'discord_user_id', type: 'string' },
        { name: 'public_key', type: 'string' },
        { name: 'access_token', type: 'string' },
        { name: 'refresh_token', type: 'string' },
    ]
});
class StellarAccount extends model_one_1.Model {
    constructor(props) {
        super(stellar_accountsSchema, props);
        this.data = props;
    }
}
exports.StellarAccount = StellarAccount;
//# sourceMappingURL=StellarAccount.js.map