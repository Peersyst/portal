import { DataSourceOptions } from "typeorm";
import { buildConfig, ConfigValidators, validPort } from "@backend/config";

export const apiDatabaseConfig: DataSourceOptions = buildConfig<DataSourceOptions>(
    {
        host: {
            default: process.env.DB_HOST || "db",
            development: "localhost",
        },
        port: {
            default: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
        },
        username: {
            default: process.env.DB_USER || "db_user",
        },
        password: {
            default: process.env.DB_PASSWORD || "db_password",
        },
        database: {
            default: process.env.DB_DATABASE || "db_database",
        },
        type: "postgres",
        synchronize: false,
        migrationsRun: true,
        entities: [`${__dirname}/entities/*{.ts,.js}`],
        migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    },
    {
        port: validPort,
    } as ConfigValidators<DataSourceOptions>,
);
