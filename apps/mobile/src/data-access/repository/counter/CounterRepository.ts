import { ICounterRepository } from "domain/adapter/repository/ICounterRepository";
import StorageRepository from "../common/StorageRepository";

export default class CounterRepository extends StorageRepository<number> implements ICounterRepository {
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
