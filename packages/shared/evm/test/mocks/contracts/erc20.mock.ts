import { ERC20 } from "../../../src/contracts/erc20";
import { createMock, MethodMock } from "@shared/test";

export const ERC20Mock = createMock<ERC20>({
    balanceOf: new MethodMock("mockResolvedValue", "100000000000000000000"),
});
