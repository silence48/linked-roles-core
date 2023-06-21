"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceForm = void 0;
const model_one_1 = require("model-one");
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    id: joi_1.default.string(),
    tx_id: joi_1.default.string(),
    issuer_id: joi_1.default.string(),
    asset_id: joi_1.default.string(),
    account_id: joi_1.default.string(),
    balance: joi_1.default.string(),
    date_acquired: joi_1.default.string(),
    verified_ownership: joi_1.default.string(),
});
class BalanceForm extends model_one_1.Form {
    constructor(data) {
        super(schema, data);
    }
}
exports.BalanceForm = BalanceForm;
//# sourceMappingURL=BalanceForm.js.map