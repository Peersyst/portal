import Factory from "../../common/utils/Factory";
import CounterRepository from "../../data-access/repository/counter/CounterRepository";
import { ICounterRepository } from "./repository/ICounterRepository";

export default class RepositoryFactory extends Factory {
    static #counterRepository: ICounterRepository;

    static get counterRepository(): ICounterRepository {
        return this.resolve(this.#counterRepository, () => new CounterRepository());
    }
}
