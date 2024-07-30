import { Logger } from "@nestjs/common";
import { DataSource } from "typeorm";
import { SeederAdapterI, TypeORMSeederAdapter } from "./adapter";
import { ConfigEnvType, getConfigEnv } from "@peersyst/env-config";

export abstract class Seeder {
    private logger: Logger;
    private connection: DataSource;

    protected environment: ConfigEnvType;
    protected adapter: SeederAdapterI;

    constructor(connection: DataSource) {
        this.logger = new Logger(Seeder.name);
        this.environment = getConfigEnv();
        this.connection = connection;
    }

    logError(error: Error): void {
        this.logger.error(error);
    }

    async connect(): Promise<void> {
        this.connection = await this.connection.initialize();
        this.adapter = new TypeORMSeederAdapter(this.connection);
        this.logger.log("Connected to database successfully!");
    }

    async disconnect(): Promise<void> {
        await this.connection.destroy();
        this.connection = null;
        this.adapter = null;
    }

    async reset(): Promise<void> {
        await this.connection.dropDatabase();
        await this.connection.runMigrations();
    }

    async seed(): Promise<void> {
        if (!this.connection || !this.adapter) {
            this.logger.error("Connection not acquired");
        }

        this.logger.log("Deleting current data...");
        await this.deleteAll();
        this.logger.log("Inserting seeders data ...");
        await this.insertAll();

        this.logger.log("Seeding finished.");
    }

    abstract deleteAll(): Promise<void>;

    abstract insertAll(): Promise<void>;
}
