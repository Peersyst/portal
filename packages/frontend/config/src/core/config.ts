import { CoreConfig } from "./types";

/**
 * Static config which is the base of the config.
 * It can be overridden by the ConfigManager.
 */
export const config: CoreConfig = {
    version: 0,
    projectName: "portal",
    publicUrl: "/",
    backendUrl: "https://bridge.aws.peersyst.tech",
    theme: "default",
    walletProviders: {
        metamask: {
            providerId: "metamask",
            name: "Metamask",
            imageUrl: "./assets/wallets/metamask.png",
            chainType: "evm",
        },
        xrplFaucet: {
            providerId: "xrplFaucet",
            name: "XRPL Faucet Wallet",
            imageUrl: "./assets/wallets/xrplFaucet.png",
            chainType: "xrp",
        },
    },
    maxNumberDecimals: 6,
    balanceRefetchInterval: 10000,
    txValidationPolling: {
        delay: 3000,
        maxIterations: 10,
    },
    peersystUrl: "https://peersyst.com/",
    posthog: {
        apiKey: "phc_2qUK15rvNyW5iKbLw2pmJpy6P6O1PvMWWbr39QWGvLK",
        host: "https://eu.posthog.com",
    },
    footerLinks: {
        discord: "https://discord.gg/xrplevm",
        x: "https://twitter.com/Peersyst",
        featureRequest: "mailto:info@peersyst.com?subject=[XRPL EVM Feature Request]",
    },
    axelar: {
        url: "https://devnet-amplifier.axelarscan.io", //"https://axelarscan.io"
        apiUrl: "https://devnet-amplifier.api.axelarscan.io/api", //"https://api.axelarscan.io/api",
        interchainTokenServiceContract: "0xB5FB4BE02232B1bBA4dC8f81dc24C26980dE9e3C",
        chainIds: {
            // xrpl: true,
            // ethereum: true,
            // binance: true,
            // polygon: true,
            // avalanche: true,
            // optimism: true,
            // fantom: true,
            //"core-ethereum": true,
            //"core-avalanche": true,
            //"core-optimism": true,
            "xrpl-evm-sidechain": true,
            "avalanche-fuji": true,
        },
        additionalChainData: {
            xrpl: {
                image: "https://peersyst-public-production.s3.eu-west-1.amazonaws.com/cc4278ab-39f5-4a67-9042-5e6cebdef549.png",
                endpoints: {
                    ws: ["wss://s.devnet.rippletest.net:51233"],
                    faucet: ["https://faucet.devnet.rippletest.net/accounts"],
                },
            },
            "xrpl-evm-sidechain": {
                image: "https://peersyst-public-production.s3.eu-west-1.amazonaws.com/c01b678f-4272-41fc-8f39-e50a17421dcf.png",
                chain_id: 1440002,
                chain_name: "xrpl-evm-devnet",
                short_name: "XRPL EVM",
                name: "XRPL EVM Devnet",
                chain_type: "evm",
                color: "#111112",
                native_token: {
                    name: "XRP",
                    symbol: "XRP",
                    decimals: 18,
                },
                endpoints: {
                    rpc: ["https://rpc-evm-sidechain.xrpl.org"],
                },
                explorer: {
                    name: "XRPL EVM Explorer",
                    url: "https://explorer.xrplevm.org",
                    icon: "https://peersyst-public-production.s3.eu-west-1.amazonaws.com/c01b678f-4272-41fc-8f39-e50a17421dcf.png",
                    block_path: "/block/{block}",
                    address_path: "/address/{address}",
                    contract_path: "/token/{address}",
                    transaction_path: "/tx/{tx}",
                },
                no_inflation: false,
                no_tvl: false,
                interchain_token_service_contract: "0x3C5688654Dd334859C149A5005249828fd608284",
            },
        },
        extraChains: [],
        additionalTokenData: {},
        extraTokens: [
            {
                id: "0xcb04fe953fd6a9e025ea1fa79d9b115d87d7e2a1fbca3db30d12d261fd944ca5",
                symbol: "TEST",
                name: "Test",
                decimals: 6,
                image: "https://ca.slack-edge.com/T01UF3E38CT-U04QFMQRDGU-925600279a9b-72",
                coingecko_id: "",
                addresses: [],
                native_chain: "avalanche-fuji",
                chains: {
                    "avalanche-fuji": {
                        tokenAddress: "0x7C08beD2152deCD80B3BE2199a1EaB087F014A21",
                        symbol: "TEST",
                        name: "Test",
                        tokenManager: "",
                        tokenManagerType: "",
                    },
                    "xrpl-evm-sidechain": {
                        tokenAddress: "0x95dEDD7D8A6BbF6e59207c691F41717113bc8b62",
                        symbol: "TEST",
                        name: "Test",
                        tokenManager: "",
                        tokenManagerType: "",
                    },
                },
            },
        ],
    },
    bridgeExplorer: {
        name: "Axelarscan Devnet Amplifier",
        url: "https://devnet-amplifier.axelarscan.io",
        icon: "https://devnet-amplifier.axelarscan.io/logos/assets/axl.svg",
        transferPath: "/transfer/{hash}",
    },

    xumm: {
        statusInterval: 3000,
        maxNumberOfRetries: 30,
    },
    attestationsPolling: {
        delay: 5000,
        maxIterations: 100,
    },
    destinationCanReceiveRefetchInterval: 20000,
    destinationIsActiveRefetchInterval: 10000,
    explorerPaths: {
        xrp: {
            account: "accounts",
            transaction: "transactions",
        },
        evm: {
            account: "address",
            transaction: "tx",
        },
    },
};
