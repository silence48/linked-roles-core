export declare function sign(message: string, secret: string): Promise<string>;
export declare function verify(message: string, signature: string, secret: string): Promise<boolean>;
export declare function encrypt(text: string, secret: string): Promise<string>;
export declare function decrypt(encodeText: string, secret: string): Promise<string>;
export declare function sha256(str: string): Promise<string>;
