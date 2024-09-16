import { ThemeKey } from "@frontend/design-system-core/themes";
import { BaseConfig } from "./manager";
import { PollingOptions } from "@peersyst/react-utils/@types/polling";
import { ChainType } from "xchain-sdk";
import { WalletProviderDef, WalletProviderId } from "@frontend/wallet/providers";

export interface CoreConfig extends BaseConfig {
    projectName: string;
    publicUrl: string;
    backendUrl: string;
    theme: ThemeKey;
    xumm: {
        statusInterval: number;
        maxNumberOfRetries: number;
    };
    maxNumberDecimals: number;
    txValidationPolling: PollingOptions;
    attestationsPolling: PollingOptions;
    peersystUrl: string;
    walletProviders: Record<WalletProviderId, WalletProviderDef>;
    balanceRefetchInterval: number;
    destinationCanReceiveRefetchInterval: number;
    destinationIsActiveRefetchInterval: number;
    explorerPaths: Record<ChainType, { account: string; transaction: string }>;
    posthog: {
        apiKey: string;
        host: string;
    };
    footerLinks: {
        discord: string;
        x: string;
        featureRequest: string;
    };
}
export interface Config extends CoreConfig {}

export type StaticConfig = Omit<Config, "minVersion">;

export type ProviderConfig = Omit<Config, "version">;
