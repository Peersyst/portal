import { AbstractRepository } from "./abstract.repository";
import { IStorage } from "./storage";

export class StorageRepository<T> extends AbstractRepository<T> {
    constructor(
        storageKey: string,
        private readonly storage: IStorage<T>,
    ) {
        super(storageKey);
    }

    protected set(value: T): Promise<void> {
        return Promise.resolve(this.storage.setItem(this.storageKey, value));
    }

    protected get(): Promise<T | undefined> {
        return Promise.resolve(this.storage.getItem(this.storageKey));
    }

    protected clear(): Promise<void> {
        return Promise.resolve(this.storage.removeItem(this.storageKey));
    }
}
