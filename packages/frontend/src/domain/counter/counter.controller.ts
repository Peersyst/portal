import BaseController, { BaseControllerParameters } from "../base.controller";
import CounterRepository from "../../repository/counter/counter.repository";

export default class CounterController extends BaseController<number> {
    constructor(baseParams: BaseControllerParameters<number>, private readonly counterRepository: CounterRepository) {
        super(...baseParams);
    }

    public loadCount(): void {
        const savedCount = this.counterRepository.getCount();
        if (savedCount !== null) this.setState(savedCount);
    }

    public increment(): void {
        const nextCount = this.getState() + 1;
        this.setState(nextCount);
        this.counterRepository.setCount(nextCount);
    }
}
