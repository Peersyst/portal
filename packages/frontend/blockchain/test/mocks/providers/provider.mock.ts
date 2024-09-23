import { createMock, MethodMock } from "@shared/test";
import { IProvider } from "../../../src/providers/core/interfaces/i-provider";

export const ProviderMock = createMock<IProvider>({
    getTokenBalance: new MethodMock("mockResolvedValue", "10000000000"),
});
