import { providers } from "ethers";
import { createMock, MethodMock, MockData } from "@shared/test";

export const ProviderMock = createMock<providers.Provider>({
    getBalance: new MethodMock("mockResolvedValue", "100000000000000000000"),
    getTransactionCount: new MethodMock("mockResolvedValue", 1),
} as MockData<providers.Provider>);
