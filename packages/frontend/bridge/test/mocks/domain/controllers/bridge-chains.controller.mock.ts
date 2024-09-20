import { createMock, MethodMock } from "@shared/test";
import { IBridgeChainsController } from "../../../../src/ui/interfaces";
import { ChainMock } from "@frontend/chain/mocks/common";
import { BridgeChainsStateMock } from "../states/bridge-chains.state.mock";

export const BridgeChainsControllerMock = createMock<IBridgeChainsController>({
    getOriginChain: new MethodMock("mockReturnValue", new ChainMock()),
    setOriginChain: new MethodMock("mockReturnValue", new ChainMock()),
    getDestinationChain: new MethodMock("mockReturnValue", new ChainMock()),
    setDestinationChain: new MethodMock("mockReturnValue", new ChainMock()),
    getBridgeChains: new MethodMock("mockReturnValue", new BridgeChainsStateMock()),
    getSourceChain: new MethodMock("mockReturnValue", new ChainMock()),
    swap: new MethodMock("mockReturnValue", new ChainMock()),
    on: new MethodMock("mockReturnValue", new ChainMock()),
});
