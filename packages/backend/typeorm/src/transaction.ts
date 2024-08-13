import { DataSource, EntityManager } from "typeorm";
import { IsolationLevel } from "typeorm/driver/types/IsolationLevel.js";

interface TransactionerTransactionOptions {
    isolationLevel?: IsolationLevel;
    onRelease?: () => void;
    onRollback?: () => void;
}

/**
 * Executes an SQL database transaction.
 * @param dataSource A data source to connect to the database.
 * @param callback A callback function that will be executed in a transaction.
 * @param options Options for the transaction.
 * @returns The result of the callback function.
 */
export async function sqlTransaction<T>(
    dataSource: DataSource,
    callback: (queryManager: EntityManager) => Promise<T>,
    options?: TransactionerTransactionOptions,
): Promise<T> {
    const queryRunner = dataSource.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction(options?.isolationLevel);

    try {
        const result = await callback(queryRunner.manager);
        await queryRunner.commitTransaction();
        return result;
    } catch (e) {
        await queryRunner.rollbackTransaction();

        options?.onRollback?.();

        throw e;
    } finally {
        await queryRunner.release();
        options?.onRelease?.();
    }
}
