import { createMock, MethodMock } from "@shared/test";
import { IBridgeTokenState } from "../../../../src/domain/states";
import { State } from "@frontend/core/domain/state";
import { BridgeTokenMock } from "../../common/bridge-token.mock";

export const BridgeTokenStateMock = createMock<State<IBridgeTokenState>>({
    setState: new MethodMock("mockReturnValue"),
    getState: new MethodMock("mockReturnValue", new BridgeTokenMock()),
    subscribe: new MethodMock("mockReturnValue"),
    reset: new MethodMock("mockReturnValue"),
});
