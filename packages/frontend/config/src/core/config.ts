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
    maxNumberDecimals: 6,
    xumm: {
        statusInterval: 3000,
        maxNumberOfRetries: 30,
    },
    txValidationPolling: {
        delay: 3000,
        maxIterations: 10,
    },
    attestationsPolling: {
        delay: 5000,
        maxIterations: 100,
    },
    balanceRefetchInterval: 10000,
    destinationCanReceiveRefetchInterval: 20000,
    destinationIsActiveRefetchInterval: 10000,
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
};
