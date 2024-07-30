import { Config } from "../types";
import { IConfigStorage } from "../manager";

/**
 * Implementation of IConfigStorage using local storage.
 */
export class LocalStorageConfigStorage implements IConfigStorage<Config> {
    private readonly storageKey = "config";

    get(): Promise<Config | undefined> {
        const config = localStorage.getItem(this.storageKey);
        return Promise.resolve(config ? JSON.parse(config) : undefined);
    }

    set(config: Config): Promise<void> {
        return Promise.resolve(localStorage.setItem(this.storageKey, JSON.stringify(config)));
    }

    clear(): Promise<void> {
        return Promise.resolve(localStorage.removeItem(this.storageKey));
    }
}
