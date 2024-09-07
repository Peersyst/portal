import { DataSource, EntityTarget } from "typeorm";
import { AnyObject } from "@swisstype/essential";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity.js";

export interface SeederAdapterI {
    insert<T extends AnyObject>(entityTarget: EntityTarget<T>, data: QueryDeepPartialEntity<T>[]): Promise<void>;
    delete<T extends AnyObject>(entityTarget: EntityTarget<T>): Promise<void>;
}

export class TypeORMSeederAdapter implements SeederAdapterI {
    constructor(private connection: DataSource) {}

    /**
     * Inserts data into the database.
     * @param entityTarget The entity target.
     * @param data The data to insert.
     */
    async insert<T extends AnyObject>(entityTarget: EntityTarget<T>, data: QueryDeepPartialEntity<T>[]): Promise<void> {
        if (data.length > 0) {
            await this.connection.createQueryBuilder().insert().into(entityTarget).values(data).execute();
        }
    }

    /**
     * Deletes data from the database.
     * @param entityTarget The entity target.
     */
    async delete<T extends AnyObject>(entityTarget: EntityTarget<T>): Promise<void> {
        await this.connection.getRepository(entityTarget).delete({});
    }
}
