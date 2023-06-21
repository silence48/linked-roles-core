"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBuilder = void 0;
const models_1 = require("../models");
const forms_1 = require("../forms");
const stellar_base_1 = require("stellar-base");
class AccountBuilder {
    constructor({ id = '', DB }) {
        this.id = id;
        this.discord_user_id = '';
        this.DB = DB;
    }
    //user: UserDataI
    async setup(user) {
        const { DB } = this;
        const userForm = new forms_1.UserForm(new models_1.User(user));
        const { id, discord_user_id } = await models_1.User.create(userForm, DB) ?? {};
        if (id) {
            this.id = id;
            this.discord_user_id = discord_user_id;
            return await this.data();
        }
    }
    async data() {
        const { DB, discord_user_id } = this;
        const user = await models_1.User.findOne('discord_user_id', discord_user_id, DB);
        const accounts = await models_1.StellarAccount.findBy('discord_user_id', discord_user_id, DB) ?? [];
        return {
            user,
            accounts
        };
    }
    async addWallet({ public_key }) {
        const { DB, discord_user_id } = this;
        const key = stellar_base_1.Keypair.fromPublicKey(public_key).publicKey();
        if (key) {
            const stellarForm = new forms_1.StellarAccountForm(new models_1.StellarAccount({
                public_key: key,
                discord_user_id: discord_user_id
            }));
            await models_1.StellarAccount.create(stellarForm, DB);
            return await this.data();
        }
    }
    async removeWallet({ public_key }) {
        const { DB, discord_user_id } = this;
        const stellarAccount = await models_1.StellarAccount.findOne('public_key', public_key, DB);
        if (stellarAccount.discord_user_id === discord_user_id) {
            await models_1.StellarAccount.delete(stellarAccount.id, DB);
            return await this.data();
        }
    }
}
exports.AccountBuilder = AccountBuilder;
//# sourceMappingURL=AccountBuilder.js.map