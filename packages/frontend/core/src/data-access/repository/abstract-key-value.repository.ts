export abstract class AbstractKeyValueRepository<Def extends Record<string, any>> {
    protected readonly storageKey: string;

    protected constructor(key: string) {
        this.storageKey = key;
    }

    /**
     * Builds a key for the repository entry.
     * @param key The key to build.
     * @returns The built key.
     */
    protected buildKey(key: keyof Def): string {
        return `${this.storageKey}-${key as string}`;
    }

    /**
     * Sets the value in the repository.
     * @param key The key to set.
     * @param value The value to set.
     */
    protected abstract set<K extends keyof Def>(key: K, value: Def[K]): Promise<void>;

    /**
     * Gets the value from the repository.
     * @param key The key to get.
     * @returns The value from the repository.
     */
    protected abstract get<K extends keyof Def>(key: K): Promise<Def[K] | undefined>;

    /**
     * Clears the repository.
     * @param key The key to clear.
     */
    protected abstract clear(key: keyof Def): Promise<void>;
}
