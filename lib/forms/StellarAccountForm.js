"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StellarAccountForm = void 0;
const model_one_1 = require("model-one");
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    id: joi_1.default.string(),
    discord_user_id: joi_1.default.string(),
    public_key: joi_1.default.string(),
    access_token: joi_1.default.string(),
    refresh_token: joi_1.default.string(),
});
class StellarAccountForm extends model_one_1.Form {
    constructor(data) {
        super(schema, data);
    }
}
exports.StellarAccountForm = StellarAccountForm;
//# sourceMappingURL=StellarAccountForm.js.map