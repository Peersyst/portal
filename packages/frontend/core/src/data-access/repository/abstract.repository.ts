export abstract class AbstractRepository<T> {
    protected readonly storageKey: string;

    protected constructor(key: string) {
        this.storageKey = key;
    }

    /**
     * Sets the value in the repository.
     * @param value The value to set.
     */
    protected abstract set(value: T): Promise<void>;

    /**
     * Gets the value from the repository.
     * @returns The value from the repository.
     */
    protected abstract get(): Promise<T | undefined>;

    /**
     * Clears the repository.
     */
    protected abstract clear(): Promise<void>;
}
