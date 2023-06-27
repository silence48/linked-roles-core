import type { UserDataI } from '../interfaces/types';
export interface AccountBuilder {
    discord_user_id: string;
    data: any;
    DB: any;
    setup(user: UserDataI): Promise<void>;
    build(): Promise<void>;
    updateDiscordCredentials(credentials: UserDataI): Promise<void>;
    addStellarAccount(account: {
        public_key: string;
        access_token: string;
        refresh_token: string;
    }): Promise<void>;
    removeStellarAccount(account: {
        public_key: string;
    }): Promise<void>;
    getStellarAccounts(): Promise<{
        accounts: any[];
    }>;
}
interface AccountBuilderData {
    discord_user_id?: string;
    data?: any;
    DB: any;
}
export declare class AccountBuilder {
    DB: any;
    data: any;
    discord_user_id: string;
    constructor({ discord_user_id, DB }: AccountBuilderData);
    static create({ user, DB }: {
        user: UserDataI;
        DB: any;
    }): Promise<AccountBuilder>;
    static find({ discord_user_id, DB }: {
        discord_user_id: string;
        DB: any;
    }): Promise<AccountBuilder>;
}
export {};
