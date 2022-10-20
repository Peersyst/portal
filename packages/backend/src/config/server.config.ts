import * as crypto from "crypto";
import { buildConfig } from "./util/config.utils";
import { validB64Key, validPort } from "./util/config.validator";

interface ServerConfig {
    port: number;
    secretKey: string;
    encryptionKey: string;
    enableSwagger: boolean;
    enableCors: boolean;
}

export default (secrets: Record<any, any>): ServerConfig => {
    return buildConfig<ServerConfig>(
        {
            port: parseInt(process.env.APP_PORT) || {
                default: 3000,
                development: 3001,
            },
            secretKey: process.env.APP_JWT_KEY || {
                default: crypto.randomBytes(32).toString("base64"),
                development: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                production: secrets.APP_JWT_KEY,
            },
            encryptionKey: process.env.APP_ENCRYPTION_KEY || {
                default: crypto.randomBytes(32).toString("base64"),
                development: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                production: secrets.APP_ENCRYPTION_KEY,
            },
            enableSwagger: {
                default: true,
                production: false,
            },
            enableCors: {
                default: true,
                production: false,
            },
        },
        {
            port: validPort,
            secretKey: validB64Key,
            encryptionKey: validB64Key,
        },
    );
};
