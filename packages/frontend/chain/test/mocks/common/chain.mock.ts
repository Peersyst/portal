import { mockify } from "@shared/test";
import { Chain } from "../../../src/common/chain";
import { ChainType } from "@shared/modules/chain";
import { TokenMock } from "@frontend/token/mocks/common";
import { ExplorerMock } from "./explorer.mock";

export const ChainMock = mockify<Chain>({
    id: "xrpl",
    name: "XRPL Ledger",
    symbol: "XRPL",
    type: ChainType.XRP,
    nativeToken: new TokenMock(),
    urls: {
        rpc: "https://s1.ripple.com:443",
        ws: "wss://s1.ripple.com:443",
    },
    explorer: new ExplorerMock(),
});
