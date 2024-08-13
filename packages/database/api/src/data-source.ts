import { DataSource } from "typeorm";
import { apiDatabaseConfig } from "./config";

export const ApiDatabaseConnectionSource = new DataSource(apiDatabaseConfig);
