import { ConfigValidators, buildConfig, validPort } from "@peersyst/env-config";
import { DataSourceOptions } from "typeorm";

export function getTypeORMConfig(secrets: Record<string, string> = {}): DataSourceOptions {
    return buildConfig<DataSourceOptions>(
        {
            host: {
                default: process.env.DB_HOST || secrets.DB_HOST || "db",
                development: "localhost",
            },
            port: {
                default: parseInt(process.env.DB_PORT) || parseInt(secrets.DB_PORT) || 5432,
            },
            username: {
                default: process.env.DB_USER || secrets.DB_USER || "db_user",
            },
            password: {
                default: process.env.DB_PASSWORD || secrets.DB_PASSWORD || "db_password",
            },
            database: {
                default: process.env.DB_DATABASE || secrets.DB_DATABASE || "db_database",
            },
            type: "postgres",
            synchronize: false,
            migrationsRun: true,
        },
        {
            port: validPort,
        } as ConfigValidators<DataSourceOptions>,
    );
}

export class DatabaseConfig {
    static fromConfig(options: DataSourceOptions): DataSourceOptions {
        return {
            ...options,
            migrations: [__dirname + "/../migrations/*{.ts,.js}"],
            entities: [__dirname + "/../entities/*{.ts,.js}"],
        } as DataSourceOptions;
    }
}
