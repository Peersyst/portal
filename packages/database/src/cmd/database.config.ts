import { DataSource, DataSourceOptions } from "typeorm";
import { DatabaseConfig } from "../config/config";
import { ConfigValidators, buildConfig, validPort } from "@peersyst/env-config";

const config = buildConfig<DataSourceOptions>(
    {
        host: {
            default: process.env.DB_HOST || "db",
            development: "localhost",
        },
        port: {
            default: parseInt(process.env.DB_PORT || "5432"),
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
    },
    {
        port: validPort,
    } as ConfigValidators<DataSourceOptions>,
);

/**
 * Database configuration to run db commands in package.json
 *
 * Needed in "typeorm" script.
 */
export const ConnectionSource = new DataSource(DatabaseConfig.fromConfig(config));
