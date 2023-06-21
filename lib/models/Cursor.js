"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
const model_one_1 = require("model-one");
const cursorSchema = new model_one_1.Schema({
    table_name: 'cursor',
    columns: [
        { name: 'id', type: 'string' },
        { name: 'url', type: 'string' },
        { name: 'cursor', type: 'string' },
        { name: 'query', type: 'string' },
    ]
});
class Cursor extends model_one_1.Model {
    constructor(props) {
        super(cursorSchema, props);
        this.data = props;
    }
}
exports.Cursor = Cursor;
//# sourceMappingURL=Cursor.js.map