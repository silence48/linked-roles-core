"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBuilder = void 0;
const models_1 = require("../models");
const forms_1 = require("../forms");
const stellar_base_1 = require("stellar-base");
class AccountBuilder {
    constructor({ discord_user_id = '', DB }) {
        this.discord_user_id = discord_user_id;
        this.data = null;
        this.DB = DB;
    }
    static async create({ user, DB }) {
        const { discord_user_id, discord_access_token, discord_expires_at, discord_refresh_token } = user;
        const instance = new AccountBuilder({ discord_user_id, DB });
        if (instance.discord_user_id) {
            await instance.setup({ discord_user_id, discord_access_token, discord_expires_at, discord_refresh_token });
        }
        return instance;
    }
    static async find({ discord_user_id, DB }) {
        const instance = new AccountBuilder({ discord_user_id, DB });
        if (instance.discord_user_id) {
            await instance.build();
        }
        return instance;
    }
    async setup(user) {
        const { DB } = this;
        const userForm = new forms_1.UserForm(new models_1.User(user));
        const { id } = (await models_1.User.create(userForm, DB)) ?? {};
        if (id) {
            return await this.build();
        }
        else {
            console.log('something went wrong');
        }
    }
    async build() {
        const { DB, discord_user_id } = this;
        const user = await models_1.User.findOne('discord_user_id', discord_user_id, DB);
        const accounts = (await models_1.StellarAccount.findBy('discord_user_id', discord_user_id, DB)) ?? [];
        this.data = {
            user,
            accounts
        };
    }
    async updateDiscordCredentials({ discord_access_token, discord_refresh_token, discord_expires_at }) {
        const { DB, discord_user_id } = this;
        const user = await models_1.User.findOne('discord_user_id', discord_user_id, DB);
        await models_1.User.update({
            ...user,
            discord_access_token,
            discord_refresh_token,
            discord_expires_at
        }, DB);
        return await this.build();
    }
    async addStellarAccount({ public_key }) {
        const { DB, discord_user_id } = this;
        const key = stellar_base_1.Keypair.fromPublicKey(public_key).publicKey();
        if (key) {
            const stellarForm = new forms_1.StellarAccountForm(new models_1.StellarAccount({
                public_key: key,
                discord_user_id: discord_user_id
            }));
            await models_1.StellarAccount.create(stellarForm, DB);
            return await this.build();
        }
    }
    async removeStellarAccount({ public_key }) {
        const { DB, discord_user_id } = this;
        const stellarAccount = await models_1.StellarAccount.findOne('public_key', public_key, DB);
        if (stellarAccount.discord_user_id === discord_user_id) {
            await models_1.StellarAccount.delete(stellarAccount.id, DB);
            return await this.build();
        }
    }
    async getStellarAccounts() {
        const { DB, discord_user_id } = this;
        const accounts = (await models_1.StellarAccount.findBy('discord_user_id', discord_user_id, DB)) ?? [];
        return {
            accounts
        };
    }
}
exports.AccountBuilder = AccountBuilder;
//# sourceMappingURL=AccountBuilder.js.map