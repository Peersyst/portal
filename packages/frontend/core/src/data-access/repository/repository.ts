import { Singleton } from "../../common/utils/singleton/singleton";

export abstract class Repository<T> extends Singleton {
    protected readonly storageKey: string;

    protected constructor(key: string) {
        super();

        this.storageKey = key;
    }

    protected abstract set(value: T): Promise<void>;

    protected abstract get(): Promise<T | undefined>;

    protected abstract clear(): Promise<void>;
}
