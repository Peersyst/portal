import { createMock, MethodMock } from "@shared/test";
import { IBridgeTokenService } from "../../../../src/domain/interfaces/i-bridge-tokens.service";
import { BridgeTokenMock } from "../../common";

export const BridgeTokenServiceMock = createMock<IBridgeTokenService>({
    getBridgeTokens: new MethodMock("mockResolvedValue", [new BridgeTokenMock()]),
});
