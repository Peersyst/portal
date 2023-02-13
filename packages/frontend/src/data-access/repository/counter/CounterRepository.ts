import { ICounterRepository } from "domain/adapter/repository/ICounterRepository";
import LocalStorageRepository from "../common/LocalStorageRepository";

export default class CounterRepository extends LocalStorageRepository<number> implements ICounterRepository {
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
