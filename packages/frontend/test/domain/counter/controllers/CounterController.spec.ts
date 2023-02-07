import CounterController from "domain/counter/controllers/CounterController";
import CounterStateGlobalMock from "../../__mocks__/counter.state.global.mock";
import CounterRepositoryMock from "../../__mocks__/CounterRepository.mock";

describe("CounterController", () => {
    let counterController: CounterController;

    const counterStateGlobalMock = new CounterStateGlobalMock();
    const counterRepositoryMock = new CounterRepositoryMock();

    beforeEach(() => {
        counterController = new CounterController(counterRepositoryMock);

        counterStateGlobalMock.clearMocks();
        counterRepositoryMock.clearMocks();
    });

    describe("loadCount", () => {
        test("Should load count if stored", async () => {
            counterRepositoryMock.getCount.mockResolvedValueOnce(1);

            await counterController.loadCount();

            expect(counterStateGlobalMock.setState).toHaveBeenCalledWith(1);
        });

        test("Should not load count if not stored", async () => {
            counterRepositoryMock.getCount.mockResolvedValueOnce(undefined);

            await counterController.loadCount();

            expect(counterStateGlobalMock.setState).not.toHaveBeenCalled();
        });
    });

    describe("increment", () => {
        test("Should increment state", async () => {
            counterStateGlobalMock.getState.mockReturnValueOnce(0);

            await counterController.increment();

            expect(counterStateGlobalMock.setState).toHaveBeenCalledWith(1);
        });
    });
});
