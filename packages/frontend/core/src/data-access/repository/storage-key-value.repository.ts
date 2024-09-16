import { AbstractKeyValueRepository } from "./abstract-key-value.repository";
import { IStorage } from "./storage";

export class StorageKeyValueRepository<Def extends Record<string, any>> extends AbstractKeyValueRepository<Def> {
    constructor(
        storageKey: string,
        private readonly storage: IStorage<Def>,
    ) {
        super(storageKey);
    }

    /**
     * @inheritdoc
     */
    protected set<K extends keyof Def>(key: K, value: Def[K]): Promise<void> {
        return Promise.resolve(this.storage.setItem(this.buildKey(key), JSON.stringify(value) as any));
    }

    /**
     * @inheritdoc
     */
    protected async get<K extends keyof Def>(key: K): Promise<Def[K] | undefined> {
        const item = await Promise.resolve(this.storage.getItem(this.buildKey(key)));

        return item ? JSON.parse(item as any) : undefined;
    }

    /**
     * @inheritdoc
     */
    protected async clear(key: keyof Def): Promise<void> {
        return Promise.resolve(this.storage.removeItem(this.buildKey(key)));
    }
}
