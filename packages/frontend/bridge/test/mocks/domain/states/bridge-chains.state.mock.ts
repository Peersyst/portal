import { createMock, MethodMock } from "@shared/test";
import { IBridgeChainsState } from "../../../../src/domain/states";
import { State } from "@frontend/core/domain/state";
import { BridgeChainPairMock } from "../../common/bridge-chain-pair.mock";

export const BridgeChainsStateMock = createMock<State<IBridgeChainsState>>({
    setState: new MethodMock("mockReturnValue"),
    getState: new MethodMock("mockReturnValue", new BridgeChainPairMock()),
    subscribe: new MethodMock("mockReturnValue"),
    reset: new MethodMock("mockReturnValue"),
});
