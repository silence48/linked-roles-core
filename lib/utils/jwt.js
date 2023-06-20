"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeData = exports.encodeData = void 0;
const cloudflare_worker_jwt_1 = __importDefault(require("@tsndr/cloudflare-worker-jwt"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const encodeData = async (payload, JWT_SECRET_KEY) => {
    const privateKey = JWT_SECRET_KEY || 'MY_SECRET_KEY';
    const token = await cloudflare_worker_jwt_1.default.sign(payload, privateKey);
    return btoa(token).replace(/\//g, '_').replace(/\+/g, '-');
};
exports.encodeData = encodeData;
const decodeData = async (payload, JWT_SECRET_KEY) => {
    const token = atob(payload.replace(/_/g, '/').replace(/-/g, '+'));
    const privateKey = JWT_SECRET_KEY || 'MY_SECRET_KEY';
    const verify = await cloudflare_worker_jwt_1.default.verify(token, privateKey);
    if (verify) {
        const deco = (0, jwt_decode_1.default)(token);
        return deco;
    }
    else {
        return undefined;
    }
};
exports.decodeData = decodeData;
//# sourceMappingURL=jwt.js.map