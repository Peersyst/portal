import { User, Seeder } from "@peersyst/database";
import { users } from "./seeders-data";
import { DataSource } from "typeorm";
import { ConnectionSource } from "../config/typeorm.config";

export class ApiSeeder extends Seeder {
    constructor(connection: DataSource) {
        super(connection);
    }

    async deleteAll(): Promise<void> {
        await this.adapter.delete(User);
    }

    async insertAll(): Promise<void> {
        await this.adapter.insert(User, users(this.environment));
    }
}

export async function runSeeders(pack = false): Promise<void> {
    const seeder = new ApiSeeder(ConnectionSource);

    try {
        await seeder.connect();
        if (pack) await seeder.reset();
        await seeder.seed();
    } catch (error) {
        seeder.logError(error as Error);
    } finally {
        await seeder.disconnect();
    }
}
