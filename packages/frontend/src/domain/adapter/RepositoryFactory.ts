import Factory from "../../utils/Factory";
import CounterRepository from "../../data-access/repositories/counter/CounterRepository";
import { ICounterRepository } from "./repositories/CounterRepository.interface";

export default class RepositoryFactory extends Factory {
    private static _counterRepository: ICounterRepository;

    static get counterRepository(): ICounterRepository {
        return this.resolve(this._counterRepository, () => new CounterRepository());
    }
}
