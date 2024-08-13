import { DataSource } from "typeorm";
import { Logger } from "@nestjs/common";
import { CONFIG_ENV } from "@shared/env";
import { Seed } from "./seed";
import { AnyObject } from "@swisstype/essential";
import { SeederAdapterI, TypeORMSeederAdapter } from "./adapter";

export abstract class Seeder {
    private logger: Logger;
    private connection: DataSource | null;
    private adapter: SeederAdapterI | null;

    constructor(connection: DataSource) {
        this.logger = new Logger(Seeder.name);
        this.connection = connection;
    }

    protected delete<T extends AnyObject>(seed: Seed<T>): Promise<void> {
        return this.adapter!.delete(seed.entity);
    }

    protected insert<T extends AnyObject>(seed: Seed<T>): Promise<void> {
        return this.adapter!.insert(seed.entity, seed.getSeed(CONFIG_ENV) as T[]);
    }

    logError(error: Error): void {
        this.logger.error(error);
    }

    async connect(): Promise<void> {
        this.connection = await this.connection!.initialize();
        this.adapter = new TypeORMSeederAdapter(this.connection);
        this.logger.log("Connected to database successfully!");
    }

    async disconnect(): Promise<void> {
        await this.connection!.destroy();
        this.connection = null;
        this.adapter = null;
    }

    async reset(): Promise<void> {
        await this.connection!.dropDatabase();
        await this.connection!.runMigrations();
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

    async run(pack = false): Promise<void> {
        try {
            await this.connect();
            if (pack) await this.reset();
            await this.seed();
        } catch (error) {
            this.logError(error as Error);
        } finally {
            await this.disconnect();
        }
    }

    abstract deleteAll(): Promise<void>;

    abstract insertAll(): Promise<void>;
}
