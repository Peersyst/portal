import { ApiDatabaseConnectionSource } from "@database/api/data-source";
import { ApiDatabaseSeeder } from "@database/api/seed/seeder";

export const seeder = new ApiDatabaseSeeder(ApiDatabaseConnectionSource);
