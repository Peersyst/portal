import Factory from "common/utils/Factory";
import CounterController from "domain/counter/controllers/CounterController";
import RepositoryFactory from "domain/adapter/RepositoryFactory";
import { ICounterController } from "./controllers/ICounterController";
import counterState from "domain/counter/state/counterState";

export default class ControllerFactory extends Factory {
    static #counterController: ICounterController;

    static get counterController(): ICounterController {
        return this.resolve(this.#counterController, () => new CounterController(counterState, RepositoryFactory.counterRepository));
    }
}
