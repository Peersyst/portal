import { Seeder } from "@database/seed";
import { users } from "./seeds";

export class ApiDatabaseSeeder extends Seeder {
    /**
     * Deletes all seeders.
     */
    async deleteAll(): Promise<void> {
        await this.delete(users);
    }

    /**
     * Inserts all seeders.
     */
    async insertAll(): Promise<void> {
        await this.insert(users);
    }
}
