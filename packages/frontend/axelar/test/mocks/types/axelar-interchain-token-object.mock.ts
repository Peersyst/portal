import { mockify } from "@shared/test";
import { AxelarInterchainTokenObject } from "../../../src";

export const AxelarInterchainTokenObjectMock = mockify<AxelarInterchainTokenObject>({
    id: "xrp",
    symbol: "XRP",
    name: "XRP",
    decimals: 6,
    image: "/logos/tokens/xrp.png",
    coingecko_id: "xrp",
    addresses: ["0x1234567890123456789012345678901234567890"],
    native_chain: "xrpl",
    chains: {
        xrpl: {
            tokenAddress: "r1234567890123456789012345678901234567890",
            symbol: "XRP",
            name: "XRP",
            tokenManager: "r1234567890123456789012345678901234567890",
            tokenManagerType: "tokenManagerType",
        },
        xrplEvm: {
            tokenAddress: "0x1234567890123456789012345678901234567890",
            symbol: "XRP",
            name: "XRP",
            tokenManager: "0x1234567890123456789012345678901234567890",
            tokenManagerType: "tokenManagerType",
        },
    },
});
