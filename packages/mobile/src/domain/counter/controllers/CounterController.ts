import { ICounterController } from "ui/adapter/controllers/ICounterController";
import { ICounterRepository } from "../../adapter/repository/ICounterRepository";
import DomainError from "../../error/DomainError";
import CounterErrorCodes from "../CounterErrorCodes";
import { ICounterState } from "../state/counterState";
import State from "domain/common/State";
import DefaultError from "domain/error/decorators/DefaultError";
import DomainErrorCodes from "domain/error/DomainErrorCodes";

export default class CounterController implements ICounterController {
    constructor(private readonly counterState: State<ICounterState>, private readonly counterRepository: ICounterRepository) {}

    public async loadCount(): Promise<void> {
        const savedCount = await this.counterRepository.getCount();
        if (savedCount !== undefined) this.counterState.setState(savedCount);
    }

    @DefaultError(DomainErrorCodes.UNKNOWN_ERROR)
    public async increment(): Promise<void> {
        const count = this.counterState.getState();

        if (count === Number.MAX_SAFE_INTEGER) throw new DomainError(CounterErrorCodes.MAX_COUNT_REACHED);

        const nextCount = this.counterState.getState() + 1;
        this.counterState.setState(nextCount);
        await this.counterRepository.setCount(nextCount);
    }
}
