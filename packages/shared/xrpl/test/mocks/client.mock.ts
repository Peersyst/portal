import { Client } from "xrpl";
import { createMock, MethodMock, MockData } from "@shared/test";
import { WalletMock } from "./wallet.mock";
import { BalanceMock } from "./balance.mock";

export const ClientMock = createMock<Client>({
    fundWallet: new MethodMock("mockResolvedValue", { balance: "9999", wallet: new WalletMock() }),
    request: new MethodMock("mockResolvedValue"),
    getXrpBalance: new MethodMock("mockResolvedValue", "50"),
    getBalances: new MethodMock("mockResolvedValue", [new BalanceMock()]),
    connect: new MethodMock("mockResolvedValue"),
    disconnect: new MethodMock("mockResolvedValue"),
} as MockData<Client>);
