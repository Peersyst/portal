import Controller from "../../common/Controller";
import { counterState } from "../state/counter.state";
import { ICounterRepository } from "../../adapter/repositories/CounterRepository.interface";
import DomainError from "domain/error/DomainError";
import CounterErrorCodes from "../CounterErrorCodes";

export default class CounterController extends Controller<number> {
    constructor(private readonly counterRepository: ICounterRepository) {
        super(counterState.getState, counterState.setState);
    }

    public async loadCount(): Promise<void> {
        const savedCount = await this.counterRepository.getCount();
        if (savedCount !== undefined) this.setState(savedCount);
    }

    public async increment(): Promise<void> {
        const count = this.getState();

        if (count === Number.MAX_SAFE_INTEGER) throw new DomainError(CounterErrorCodes.MAX_COUNT_REACHED);

        const nextCount = this.getState() + 1;
        this.setState(nextCount);
        await this.counterRepository.setCount(nextCount);
    }
}
