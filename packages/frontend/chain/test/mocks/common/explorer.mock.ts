import { mockify } from "@shared/test";
import { Explorer } from "../../../src/common/explorer";

export const ExplorerMock = mockify<Explorer>({
    name: "XRP Ledger",
    url: "https://testnet.xrpl.org",
    paths: {
        address: "/accounts/{address}",
        block: "/ledgers/{block}",
        token: "/accounts/{address}",
        transaction: "/transactions/{tx}",
    },
    getAddressUrl: jest.fn().mockReturnValue("https://testnet.xrpl.org/accounts/{address}"),
    getBlockUrl: jest.fn().mockReturnValue("https://testnet.xrpl.org/ledgers/{block}"),
    getTokenUrl: jest.fn().mockReturnValue("https://testnet.xrpl.org/accounts/{address}"),
    getTransactionUrl: jest.fn().mockReturnValue("https://testnet.xrpl.org/transactions/{tx}"),
});
