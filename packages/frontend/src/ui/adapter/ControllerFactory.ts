import Factory from "common/utils/Factory";
import CounterController from "domain/counter/controllers/CounterController";
import RepositoryFactory from "domain/adapter/RepositoryFactory";
import { ICounterController } from "./controllers/ICounterController";
import counterState from "domain/counter/state/counterState";
import { ISettingsController } from "./controllers/ISettingsController";
import SettingsController from "domain/settings/SettignsController";

export default class ControllerFactory extends Factory {
    static #counterController: ICounterController;
    static #settingsController: ISettingsController;

    static get counterController(): ICounterController {
        return this.resolve(this.#counterController, () => new CounterController(counterState, RepositoryFactory.counterRepository));
    }

    static get settingsController(): ISettingsController {
        return this.resolve(this.#settingsController, () => new SettingsController(RepositoryFactory.settingsRepository));
    }
}
