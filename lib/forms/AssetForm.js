"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetForm = void 0;
const model_one_1 = require("model-one");
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    id: joi_1.default.string(),
    issuer_id: joi_1.default.string(),
    code: joi_1.default.string(),
    query: joi_1.default.string(),
});
class AssetForm extends model_one_1.Form {
    constructor(data) {
        super(schema, data);
    }
}
exports.AssetForm = AssetForm;
//# sourceMappingURL=AssetForm.js.map