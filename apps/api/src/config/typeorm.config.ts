import { DataSourceOptions } from "typeorm";
import { apiDatabaseConfig } from "@database/api/config";

export type NestConnectionOptions = DataSourceOptions & {
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    retryDelay?: number;
    retryAttempts?: number;
};
function getTypeORMConfig(): DataSourceOptions {
    return apiDatabaseConfig;
}

export function getNestTypeORMConfig(): NestConnectionOptions {
    return {
        ...getTypeORMConfig(),
        autoLoadEntities: true,
    };
}
