import type { UserDataI } from '../interfaces/types';
interface AccountBuilderData {
    id?: string;
    discord_user_id?: string;
    DB: any;
}
export declare class AccountBuilder {
    id: string;
    DB: any;
    discord_user_id: string;
    constructor({ id, DB }: AccountBuilderData);
    setup(user: UserDataI): Promise<{
        user: any;
        accounts: any;
    } | undefined>;
    private data;
    addWallet({ public_key }: any): Promise<{
        user: any;
        accounts: any;
    } | undefined>;
    removeWallet({ public_key }: any): Promise<{
        user: any;
        accounts: any;
    } | undefined>;
}
export {};
