import { config } from "config";

export default class BaseRepository<T> {
    protected readonly storageKey: string;

    protected constructor(key: string) {
        this.storageKey = config.projectName + "_" + key;
    }

    protected set(value: T): void {
        localStorage.setItem(this.storageKey, JSON.stringify(value));
    }

    protected get(): T | null {
        const item = localStorage.getItem(this.storageKey);
        return item ? JSON.parse(item) : null;
    }

    protected clear(): void {
        localStorage.removeItem(this.storageKey);
    }
}
