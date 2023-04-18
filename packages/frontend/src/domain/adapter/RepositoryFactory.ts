import SettingsRepository from "data-access/repository/settings/SettingsRepository";
import Factory from "../../common/utils/Factory";
import CounterRepository from "../../data-access/repository/counter/CounterRepository";
import { ICounterRepository } from "./repository/ICounterRepository";
import { ISettingsRepository } from "./repository/ISettingsRepository";

export default class RepositoryFactory extends Factory {
    static #counterRepository: ICounterRepository;
    static #settingsRepository: ISettingsRepository;

    static get counterRepository(): ICounterRepository {
        return this.resolve(this.#counterRepository, () => new CounterRepository());
    }

    static get settingsRepository(): ISettingsRepository {
        return this.resolve(this.#settingsRepository, () => new SettingsRepository());
    }
}
