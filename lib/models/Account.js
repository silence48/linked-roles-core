"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const model_one_1 = require("model-one");
const Schema_1 = require("../database/Schema");
class Account extends model_one_1.Model {
    constructor(props) {
        super(Schema_1.accountSchema, props);
        this.data = props;
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map