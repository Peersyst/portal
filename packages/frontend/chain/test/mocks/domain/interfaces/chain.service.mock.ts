import { createMock, MethodMock } from "@shared/test";
import { IChainService } from "../../../../src/domain/interfaces";
import { ChainMock } from "../../common";

export const ChainServiceMock = createMock<IChainService>({
    getChains: new MethodMock("mockResolvedValue", [new ChainMock()]),
});
