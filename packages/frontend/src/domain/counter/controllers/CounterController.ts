import { ICounterRepository } from "../../adapter/repositories/CounterRepository.interface";
import DomainError from "../../error/DomainError";
import CounterErrorCodes from "../CounterErrorCodes";
import State from "domain/common/State";

export default class CounterController {
    constructor(private readonly counterState: State<number>, private readonly counterRepository: ICounterRepository) {}

    public async loadCount(): Promise<void> {
        const savedCount = await this.counterRepository.getCount();
        if (savedCount !== undefined) this.counterState.setState(savedCount);
    }

    public async increment(): Promise<void> {
        const count = this.counterState.getState();

        if (count === Number.MAX_SAFE_INTEGER) throw new DomainError(CounterErrorCodes.MAX_COUNT_REACHED);

        const nextCount = this.counterState.getState() + 1;
        this.counterState.setState(nextCount);
        await this.counterRepository.setCount(nextCount);
    }
}
