import { ChainType } from "@shared/modules/chain";

export const WalletProviderId = {
    METAMASK: "metamask",
    XRPL_FAUCET: "xrplFaucet",
} as const;
export type WalletProviderId = (typeof WalletProviderId)[keyof typeof WalletProviderId];

export type WalletProviderDef = {
    providerId: WalletProviderId;
    name: string;
    imageUrl: string;
    chainType: ChainType;
};

export const WalletProviderConnectionError = {
    REJECTED: "failed",
    FAILED: "failed",
} as const;
export type WalletProviderConnectionError = (typeof WalletProviderConnectionError)[keyof typeof WalletProviderConnectionError];
