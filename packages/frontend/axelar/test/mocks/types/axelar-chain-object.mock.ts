import { mockify } from "@shared/test";
import { AxelarChainObject } from "../../../src/types/axelar-chain.types";

export const AxelarChainObjectMock = mockify<AxelarChainObject>({
    chain_id: 11155111,
    chain_name: "core-ethereum",
    maintainer_id: "core-ethereum",
    endpoints: {
        rpc: ["https://1rpc.io/sepolia", "https://ethereum-sepolia.publicnode.com", "https://endpoints.omniatech.io/v1/eth/sepolia/public"],
    },
    native_token: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
    },
    name: "Ethereum Sepolia",
    short_name: "ETH",
    image: "/logos/chains/ethereum.svg",
    color: "#c0c2c3",
    explorer: {
        name: "Etherscan",
        url: "https://sepolia.etherscan.io",
        icon: "/logos/explorers/etherscan.png",
        block_path: "/block/{block}",
        address_path: "/address/{address}",
        contract_path: "/token/{address}",
        transaction_path: "/tx/{tx}",
    },
    id: "core-ethereum",
    chain_type: "evm",
    provider_params: [
        {
            chainId: "0xaa36a7",
            chainName: "Ethereum Sepolia Devnet-amplifier",
            rpcUrls: [
                "https://1rpc.io/sepolia",
                "https://ethereum-sepolia.publicnode.com",
                "https://endpoints.omniatech.io/v1/eth/sepolia/public",
            ],
            nativeCurrency: {
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18,
            },
            blockExplorerUrls: ["https://sepolia.etherscan.io"],
        },
    ],
    no_inflation: false,
    no_tvl: false,
});
