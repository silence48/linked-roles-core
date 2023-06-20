export declare const encodeData: (payload: any, JWT_SECRET_KEY: string) => Promise<string>;
export declare const decodeData: (payload: string, JWT_SECRET_KEY: string) => Promise<unknown>;
