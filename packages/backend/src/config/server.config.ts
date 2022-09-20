import { config } from "./util/config.utils";
import { validB64Key, validPort } from "./util/config.validator";
import * as crypto from "crypto";

interface ServerConfig {
    port: number;
    secretKey: string;
    encryptionKey: string;
    enableSwagger: boolean;
    enableCors: boolean;
}

export default (secrets: Record<any, any>): ServerConfig => {
    return {
        port: config({
            env: {
                key: "APP_PORT",
                parseFn: parseInt,
            },
            defaultValue: {
                all: 3000,
                development: 3001,
            },
            validateFn: validPort,
        }),
        secretKey: config({
            env: {
                key: "APP_JWT_KEY",
            },
            defaultValue: secrets.APP_JWT_KEY || crypto.randomBytes(32),
            validateFn: validB64Key,
        }),
        encryptionKey: config({
            env: {
                key: "APP_ENCRYPTION_KEY",
            },
            defaultValue: secrets.APP_ENCRYPTION_KEY || crypto.randomBytes(32),
            validateFn: validB64Key,
        }),
        enableSwagger: config({ defaultValue: { all: true, production: false } }),
        enableCors: config({ defaultValue: { all: true, production: false } }),
    };
};
