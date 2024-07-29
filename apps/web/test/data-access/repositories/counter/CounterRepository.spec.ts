import CounterRepository from "data-access/repository/counter/CounterRepository";
import LocalStorageRepositoryGlobalMock from "../../mocks/LocalStorageRepository.globalMock";

describe("CounterRepository", () => {
    const localStorageRepositoryGlobalMock = new LocalStorageRepositoryGlobalMock();

    beforeEach(() => {
        localStorageRepositoryGlobalMock.clearMocks();
    });

    describe("getCount", () => {
        test("Should return 1", async () => {
            localStorageRepositoryGlobalMock.get.mockResolvedValueOnce(1);
            expect(await new CounterRepository().getCount()).toEqual(1);
        });
    });

    describe("setCount", () => {
        test("Should set 1", async () => {
            await new CounterRepository().setCount(1);
            expect(localStorageRepositoryGlobalMock.set).toHaveBeenCalledWith(1);
        });
    });
});
