import { mockify } from "@shared/test";
import { Token } from "../../../src/common/token";

export const TokenMock = mockify<Token>({
    symbol: "XRP",
    decimals: 6,
    name: "XRP",
});
