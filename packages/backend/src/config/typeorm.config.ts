import { ConnectionOptions } from "typeorm";
import { config } from "./util/config.utils";
import { validPort } from "./util/config.validator";

export type NestConnectionOptions = ConnectionOptions & {
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    retryDelay?: number;
    retryAttempts?: number;
};

export function getTypeORMConfig(secrets: Record<string, string> = {}): ConnectionOptions {
    return {
        host: config({
            env: {
                key: "DB_HOST",
            },
            defaultValue: {
                all: secrets.DB_HOST || "db",
                development: "localhost",
            },
        }),
        port: config({
            env: {
                key: "DB_PORT",
                parseFn: parseInt,
            },
            defaultValue: {
                production: Number(secrets.DB_PORT) || 5432,
                all: 5432,
            },
            validateFn: validPort,
        }),
        username: config({
            env: {
                key: "DB_USER",
            },
            defaultValue: {
                production: secrets.DB_USER,
                all: "db_user",
            },
        }),
        password: config({
            env: {
                key: "DB_PASSWORD",
            },
            defaultValue: {
                production: secrets.DB_PASSWORD,
                all: "db_password",
            },
        }),
        database: config({
            env: {
                key: "DB_DATABASE",
            },
            defaultValue: {
                production: secrets.DB_DATABASE,
                all: "db_database",
            },
        }),
        type: "postgres",
        synchronize: false,
        migrationsRun: true,
        entities: [__dirname + "/../database/entities/*{.ts,.js}"],
        migrations: [__dirname + "/../database/migrations/**/*{.ts,.js}"],
        cli: {
            migrationsDir: __dirname + "/../database/migrations",
        },
    };
}

export function getNestTypeORMConfig(secrets?: Record<string, string>): NestConnectionOptions {
    return {
        ...getTypeORMConfig(secrets),
        autoLoadEntities: true,
    };
}

export default getTypeORMConfig();
