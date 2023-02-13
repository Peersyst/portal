import Factory from "../../common/utils/Factory";
import CounterRepository from "../../data-access/repository/counter/CounterRepository";
import { ICounterRepository } from "./repositories/ICounterRepository";

export default class RepositoryFactory extends Factory {
    private static _counterRepository: ICounterRepository;

    static get counterRepository(): ICounterRepository {
        return this.resolve(this._counterRepository, () => new CounterRepository());
    }
}
