import { ConfigManagerMock } from "@frontend/config/mocks/core/manager";
import { AxelarService } from "../../src/axelar.service";
import { mockify } from "@shared/test";
import { AxelarChain } from "../../src/models/axelar-chain";
import { AxelarChainObjectMock } from "../mocks/types/axelar-chain-object.mock";
import { ServiceError } from "@frontend/core/data-access/service/error";
import { AxelarErrors } from "../../src/axelar.errors";

describe("AxelarService", () => {
    let axelarService: AxelarService;

    const configManagerMock = new ConfigManagerMock();

    beforeEach(() => {
        configManagerMock.clearMocks();

        axelarService = new AxelarService(configManagerMock);
    });

    describe("getChains", () => {
        it("should return the chains supported by Axelar", async () => {
            const getChainsResponseMock = [new AxelarChainObjectMock()];
            const fetchResultMock = new (mockify<Response>({
                ok: true,
                json: () => Promise.resolve(getChainsResponseMock),
            }))();
            const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValueOnce(fetchResultMock);

            const chains = await axelarService.getChains();

            expect(fetchSpy).toHaveBeenCalledWith(`${configManagerMock.get("axelar.apiUrl")}/getChains`, {
                headers: { "Content-Type": "application/json" },
            });
            expect(chains).toEqual(
                getChainsResponseMock.map((chain) => new AxelarChain(chain, configManagerMock.get("axelar.url")).toChain()),
            );
        });

        it("should throw an error if the response is not ok", async () => {
            const fetchResultMock = new (mockify<Response>({
                ok: false,
            }))();
            jest.spyOn(global, "fetch").mockResolvedValueOnce(fetchResultMock);

            await expect(axelarService.getChains()).rejects.toThrow(new ServiceError(AxelarErrors.GET_CHAINS_FETCH_ERROR));
        });

        it("should throw an error if the response is not parseable", async () => {
            const fetchResultMock = new (mockify<Response>({
                ok: true,
                json: () => Promise.reject("not a json"),
            }))();
            jest.spyOn(global, "fetch").mockResolvedValueOnce(fetchResultMock);

            await expect(axelarService.getChains()).rejects.toThrow(new ServiceError(AxelarErrors.GET_CHAINS_PARSE_ERROR));
        });
    });
});
