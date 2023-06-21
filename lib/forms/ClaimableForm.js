"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimableForm = void 0;
const model_one_1 = require("model-one");
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    id: joi_1.default.string(),
    claimable_id: joi_1.default.string(),
    date_granted: joi_1.default.string(),
    claimed_date: joi_1.default.string(),
});
class ClaimableForm extends model_one_1.Form {
    constructor(data) {
        super(schema, data);
    }
}
exports.ClaimableForm = ClaimableForm;
//# sourceMappingURL=ClaimableForm.js.map