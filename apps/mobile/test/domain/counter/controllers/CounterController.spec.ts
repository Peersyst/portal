import CounterController from "@/domain/counter/controllers/CounterController";
import DomainErrorCodes from "@/domain/error/DomainErrorCodes";
import CounterStateMock from "../../mocks/counterState.mock";
import CounterRepositoryMock from "../../mocks/CounterRepository.mock";

describe("CounterController", () => {
    let counterController: CounterController;

    const counterStateMock = new CounterStateMock();
    const counterRepositoryMock = new CounterRepositoryMock();

    beforeEach(() => {
        counterController = new CounterController(counterStateMock, counterRepositoryMock);

        counterStateMock.clearMocks();
        counterRepositoryMock.clearMocks();
    });

    describe("loadCount", () => {
        test("Should load count if stored", async () => {
            counterRepositoryMock.getCount.mockResolvedValueOnce(1);

            await counterController.loadCount();

            expect(counterStateMock.setState).toHaveBeenCalledWith(1);
        });

        test("Should not load count if not stored", async () => {
            counterRepositoryMock.getCount.mockResolvedValueOnce(undefined);

            await counterController.loadCount();

            expect(counterStateMock.setState).not.toHaveBeenCalled();
        });
    });

    describe("increment", () => {
        test("Should increment state", async () => {
            counterStateMock.getState.mockReturnValueOnce(0);

            await counterController.increment();

            expect(counterStateMock.setState).toHaveBeenCalledWith(1);
        });

        test("Throws MAX_COUNT_REACHED when count is MAX_SAFE_INTEGER", async () => {
            counterStateMock.getState.mockReturnValueOnce(Number.MAX_SAFE_INTEGER);

            await expect(counterController.increment()).rejects.toThrowError(DomainErrorCodes.MAX_COUNT_REACHED);
        });
    });
});
