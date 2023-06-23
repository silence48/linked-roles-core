"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const model_one_1 = require("model-one");
const userSchema = new model_one_1.Schema({
    table_name: 'users',
    columns: [
        { name: 'id', type: 'string' },
        { name: 'discord_user_id', type: 'string' },
        { name: 'discord_access_token', type: 'string' },
        { name: 'discord_refresh_token', type: 'string' },
        { name: 'discord_expires_at', type: 'string' }
    ]
});
class User extends model_one_1.Model {
    constructor(props) {
        super(userSchema, props);
        this.data = props;
    }
    async discordExists(discord_user_id, DB) {
        const userExists = await User.findOne('discord_user_id', discord_user_id, DB);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map