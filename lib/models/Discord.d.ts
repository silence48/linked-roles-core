export declare class Discord {
    static getOAuthUrl(env: any): Promise<{
        state: string;
        url: string;
    }>;
    static getOAuthTokens(code: string, env: any): Promise<any>;
    static getUserData(tokens: any): Promise<any>;
    /**
     * @typedef DiscordRoleMetaData
     * @type {
     * @property {ApplicationRoleConnectionMetadataType} Type - 	type of metadata value
     * @property  {string} key -  name of the metadata field (1-100 characters)
     * @property  {string} name - name of the metadata field (1-100 characters)
     * @property  {dictionary} name_localizations?:
     * @property  {string} description
     * @property  {dictionary} description_localizations
     * @property {string} id - an ID.
     * @property {string} name - your name.
     * @property {number} age - your age.
     */
    static pushMetadata(discord_user_id: string, metadata: any, env: any): Promise<Response | undefined>;
    static getMetadata(discord_user_id: string, data: any, env: any): Promise<any>;
}
