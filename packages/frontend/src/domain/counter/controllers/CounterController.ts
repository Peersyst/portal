import { ICounterController } from "ui/adapter/controllers/ICounterController";
import { ICounterRepository } from "../../adapter/repositories/ICounterRepository";
import DomainError from "../../error/DomainError";
import CounterErrorCodes from "../CounterErrorCodes";
import { ICounterState } from "../state/counterState";
import State from "domain/common/State";

export default class CounterController implements ICounterController {
    constructor(private readonly counterState: State<ICounterState>, private readonly counterRepository: ICounterRepository) {}

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
