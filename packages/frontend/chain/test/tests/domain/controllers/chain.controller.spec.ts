import { ChainController } from "../../../../src/domain/controllers/chain.controller";
import { ChainMock } from "../../../mocks/common";
import { ChainServiceMock } from "../../../mocks/domain/interfaces/chain.service.mock";

describe("ChainController", () => {
    let chainController: ChainController;

    const chainServiceMock = new ChainServiceMock();

    beforeEach(async () => {
        chainServiceMock.clearMocks();

        chainController = new ChainController(chainServiceMock);
    });

    describe("getChains", () => {
        it("should return the chains", async () => {
            const chainsMock = [new ChainMock()];
            chainServiceMock.getChains.mockResolvedValueOnce(chainsMock);

            const chains = await chainController.getChains();

            expect(chains).toEqual(chainsMock);
        });
    });
});
