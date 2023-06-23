import type { UserDataI } from '../interfaces/types';
interface AccountBuilderData {
    discord_user_id?: string;
    data?: any;
    DB: any;
}
export declare class AccountBuilder {
    readonly DB: any;
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
    setup(user: UserDataI): Promise<void>;
    private build;
    updateDiscordCredentials({ discord_access_token, discord_refresh_token, discord_expires_at }: UserDataI): Promise<void>;
    addStellarAccount({ public_key }: any): Promise<void>;
    removeStellarAccount({ public_key }: any): Promise<void>;
    getStellarAccounts(): Promise<{
        accounts: any;
    }>;
}
export {};
