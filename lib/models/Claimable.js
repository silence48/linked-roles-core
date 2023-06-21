"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Claimable = void 0;
const model_one_1 = require("model-one");
const claimableSchema = new model_one_1.Schema({
    table_name: 'claimable',
    columns: [
        { name: 'id', type: 'string' },
        { name: 'claimable_id', type: 'string' },
        { name: 'date_granted', type: 'string' },
        { name: 'date_claimed', type: 'string' },
    ]
});
class Claimable extends model_one_1.Model {
    constructor(props) {
        super(claimableSchema, props);
        this.data = props;
    }
}
exports.Claimable = Claimable;
//# sourceMappingURL=Claimable.js.map