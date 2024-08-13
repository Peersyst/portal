import { Seeder } from "@database/seed";
import { users } from "./seeds";

export class ApiDatabaseSeeder extends Seeder {
    async deleteAll(): Promise<void> {
        await this.delete(users);
    }

    async insertAll(): Promise<void> {
        await this.insert(users);
    }
}
