"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
const model_one_1 = require("model-one");
const assetSchema = new model_one_1.Schema({
    table_name: 'assets',
    columns: [
        { name: 'id', type: 'string' },
        { name: 'issuer_id', type: 'string' },
        { name: 'code', type: 'string' },
        { name: 'query', type: 'string' },
    ]
});
class Asset extends model_one_1.Model {
    constructor(props) {
        super(assetSchema, props);
        this.data = props;
    }
}
exports.Asset = Asset;
//# sourceMappingURL=Asset.js.map