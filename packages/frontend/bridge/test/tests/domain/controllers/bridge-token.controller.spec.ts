import { ChainMock } from "@frontend/chain/mocks/common";
import { BridgeToken } from "../../../../src/common/bridge-token";
import { BridgeTokenController } from "../../../../src/domain/controllers/bridge-token/bridge-token.controller";
import { IBridgeChainsState } from "../../../../src/domain/states";
import { BridgeTokenMock } from "../../../mocks/common";
import { BridgeChainsControllerMock } from "../../../mocks/domain/controllers/bridge-chains.controller.mock";
import { BridgeTokenServiceMock } from "../../../mocks/domain/interface/bridge-token.service.mock";
import { BridgeTokenStateMock } from "../../../mocks/domain/states/bridge-token.state.mock";
import { TokenMock } from "@frontend/token/mocks/common";

describe("BridgeTokenController", () => {
    let bridgeTokenController: BridgeTokenController;

    const bridgeTokenServiceMock = new BridgeTokenServiceMock();
    const bridgeChainsControllerMock = new BridgeChainsControllerMock();
    const bridgeTokenStateMock = new BridgeTokenStateMock();

    beforeEach(() => {
        bridgeTokenServiceMock.clearMocks();
        bridgeChainsControllerMock.clearMocks();
        bridgeTokenStateMock.clearMocks();

        bridgeTokenController = new BridgeTokenController(bridgeTokenServiceMock, bridgeChainsControllerMock, bridgeTokenStateMock);
    });

    describe("handleBridgeChainsLoad", () => {
        let setBridgeTokenSpy: jest.SpyInstance<void, [token: BridgeToken | undefined], any>;

        beforeEach(() => {
            setBridgeTokenSpy = jest.spyOn(bridgeTokenController, "setBridgeToken");
            setBridgeTokenSpy.mockClear();
        });

        it("should set bridge token to undefined if chains are not set", async () => {
            bridgeTokenStateMock.getState.mockReturnValueOnce(new BridgeTokenMock());

            await bridgeTokenController["handleBridgeChainsLoad"]({});

            expect(setBridgeTokenSpy).toHaveBeenCalledWith(undefined);
        });

        it("should set bridge token to native token if chains changed and native token is found", async () => {
            const nativeTokenSymbol = "ETH";
            const nativeTokenMock = new BridgeTokenMock({ symbol: nativeTokenSymbol });
            const chainsStateValueMock: IBridgeChainsState = {
                originChain: new ChainMock({ nativeToken: new TokenMock({ symbol: nativeTokenSymbol }) }),
                destinationChain: new ChainMock(),
            };
            bridgeTokenStateMock.getState.mockReturnValueOnce(new BridgeTokenMock());
            bridgeTokenServiceMock.getBridgeTokens.mockResolvedValueOnce([nativeTokenMock]);

            await bridgeTokenController["handleBridgeChainsLoad"](chainsStateValueMock);

            expect(setBridgeTokenSpy).toHaveBeenCalledWith(nativeTokenMock);
        });

        it("should set bridge token to first token if chains changed and native token is not found", async () => {
            const nativeTokenSymbol = "ETH";
            const firstTokenSymbol = "USDT";
            const firstTokenMock = new BridgeTokenMock({ symbol: firstTokenSymbol });
            const chainsStateValueMock: IBridgeChainsState = {
                originChain: new ChainMock({ nativeToken: new TokenMock({ symbol: nativeTokenSymbol }) }),
                destinationChain: new ChainMock(),
            };
            bridgeTokenStateMock.getState.mockReturnValueOnce(new BridgeTokenMock());
            bridgeTokenServiceMock.getBridgeTokens.mockResolvedValueOnce([firstTokenMock]);

            await bridgeTokenController["handleBridgeChainsLoad"](chainsStateValueMock);

            expect(setBridgeTokenSpy).toHaveBeenCalledWith(firstTokenMock);
        });

        it("should not set bridge token if chains did not change", async () => {
            const chainsStateValueMock: IBridgeChainsState = {
                originChain: new ChainMock(),
                destinationChain: new ChainMock(),
            };
            bridgeTokenStateMock.getState.mockReturnValueOnce(new BridgeTokenMock());

            await bridgeTokenController["handleBridgeChainsLoad"](chainsStateValueMock, chainsStateValueMock);

            expect(setBridgeTokenSpy).not.toHaveBeenCalled();
        });
    });

    describe("getBridgeTokens", () => {
        it("should get bridge tokens", async () => {
            const bridgeTokens = [new BridgeTokenMock(), new BridgeTokenMock()];
            bridgeTokenServiceMock.getBridgeTokens.mockResolvedValueOnce(bridgeTokens);

            const result = await bridgeTokenController.getBridgeTokens(new ChainMock(), new ChainMock());

            expect(result).toEqual(bridgeTokens);
        });
    });

    describe("setBridgeToken", () => {
        it("should set bridge token", () => {
            const bridgeToken = new BridgeTokenMock();

            bridgeTokenController.setBridgeToken(bridgeToken);

            expect(bridgeTokenStateMock.setState).toHaveBeenCalledWith(bridgeToken);
        });
    });
});
