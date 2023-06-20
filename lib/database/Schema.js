"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountSchema = void 0;
const model_one_1 = require("model-one");
exports.accountSchema = new model_one_1.Schema({
    table_name: 'accounts',
    columns: [
        { name: 'id', type: 'string' },
        { name: 'accepted_tos', type: 'boolean' }
    ],
});
//# sourceMappingURL=Schema.js.map