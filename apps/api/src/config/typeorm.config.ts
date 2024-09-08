import { DataSourceOptions } from "typeorm";
import { apiDatabaseConfig } from "@database/api/config";

export type NestConnectionOptions = DataSourceOptions & {
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    retryDelay?: number;
    retryAttempts?: number;
};

/**
 * Gets the TypeORM configuration.
 * @returns The TypeORM configuration.
 */
function getTypeORMConfig(): DataSourceOptions {
    return apiDatabaseConfig;
}

/**
 * Gets the Nest TypeORM configuration.
 * @returns The Nest TypeORM configuration.
 */
export function getNestTypeORMConfig(): NestConnectionOptions {
    return {
        ...getTypeORMConfig(),
        autoLoadEntities: true,
    };
}
