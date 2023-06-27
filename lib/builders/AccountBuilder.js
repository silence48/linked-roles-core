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
        const instance = new AccountBuilder({ discord_user_id: user.discord_user_id, DB });
        await instance.setup(user);
        return instance;
    }
    static async find({ discord_user_id, DB }) {
        const instance = new AccountBuilder({ discord_user_id, DB });
        await instance.build();
        return instance;
    }
    async setup(user) {
        const userForm = new forms_1.UserForm(new models_1.User(user));
        const { id } = (await models_1.User.create(userForm, this.DB)) ?? {};
        if (id) {
            await this.build();
        }
        else {
            console.log('something went wrong');
        }
    }
    async build() {
        const user = await models_1.User.findOne('discord_user_id', this.discord_user_id, this.DB);
        const accounts = (await models_1.StellarAccount.findBy('discord_user_id', this.discord_user_id, this.DB)) ?? [];
        this.data = {
            user,
            accounts
        };
    }
    async updateDiscordCredentials({ discord_access_token, discord_refresh_token, discord_expires_at }) {
        const user = await models_1.User.findOne('discord_user_id', this.discord_user_id, this.DB);
        await models_1.User.update({
            ...user,
            discord_access_token,
            discord_refresh_token,
            discord_expires_at
        }, this.DB);
        await this.build();
    }
    async addStellarAccount({ public_key, access_token, refresh_token }) {
        const key = stellar_base_1.Keypair.fromPublicKey(public_key).publicKey();
        const exists = await models_1.StellarAccount.findOne('public_key', key, this.DB);
        if (!exists) {
            const stellarForm = new forms_1.StellarAccountForm(new models_1.StellarAccount({
                public_key: key,
                discord_user_id: this.discord_user_id,
                access_token: access_token,
                refresh_token: refresh_token
            }));
            await models_1.StellarAccount.create(stellarForm, this.DB);
        }
        await this.build();
    }
    async removeStellarAccount({ public_key }) {
        const stellarAccount = await models_1.StellarAccount.findOne('public_key', public_key, this.DB);
        if (stellarAccount.discord_user_id === this.discord_user_id) {
            await models_1.StellarAccount.delete(stellarAccount.id, this.DB);
            await this.build();
        }
    }
    async getStellarAccounts() {
        const accounts = (await models_1.StellarAccount.findBy('discord_user_id', this.discord_user_id, this.DB)) ?? [];
        return {
            accounts
        };
    }
}
exports.AccountBuilder = AccountBuilder;
//# sourceMappingURL=AccountBuilder.js.map