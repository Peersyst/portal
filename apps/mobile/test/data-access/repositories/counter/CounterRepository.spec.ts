import CounterRepository from "@/data-access/repository/counter/CounterRepository";
import StorageRepositoryGlobalMock from "../../mocks/StorageRepository.globalMock";

describe("CounterRepository", () => {
    const storageRepositoryGlobalMock = new StorageRepositoryGlobalMock();

    beforeEach(() => {
        storageRepositoryGlobalMock.clearMocks();
    });

    describe("getCount", () => {
        test("Should return 1", async () => {
            storageRepositoryGlobalMock.get.mockResolvedValueOnce(1);
            expect(await new CounterRepository().getCount()).toEqual(1);
        });
    });

    describe("setCount", () => {
        test("Should set 1", async () => {
            await new CounterRepository().setCount(1);
            expect(storageRepositoryGlobalMock.set).toHaveBeenCalledWith(1);
        });
    });
});
