import LocalStorageRepository from "../common/LocalStorageRepository";

export default class CounterRepository extends LocalStorageRepository<number> {
    constructor() {
        super("counter");
    }

    getCount(): Promise<number | undefined> {
        return this.get();
    }

    setCount(count: number): Promise<void> {
        return this.set(count);
    }
}
