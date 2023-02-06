import Factory from "../../utils/Factory";
import CounterController from "../../domain/counter/controllers/CounterController";
import RepositoryFactory from "../../domain/adapter/RepositoryFactory";
import { ICounterController } from "./controllers/CounterController.interface";

export default class ControllerFactory extends Factory {
    private static _counterController: ICounterController;

    static get counterController(): ICounterController {
        return this.resolve(this._counterController, () => new CounterController(RepositoryFactory.counterRepository));
    }
}
