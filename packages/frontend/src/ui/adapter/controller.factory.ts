import { counterStore } from "store/counter/counter.store";
import CounterController from "domain/counter/counter.controller";
import RepositoryFactory from "domain/adapter/repository.factory";

export default class ControllerFactory {
    private static counterController: CounterController | undefined;

    static getCounterController(): CounterController {
        if (!this.counterController)
            return (this.counterController = new CounterController(
                [counterStore.getState, counterStore.setState],
                RepositoryFactory.getCounterRepository(),
            ));
        return this.counterController;
    }
}
