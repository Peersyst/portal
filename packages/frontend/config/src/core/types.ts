import { ThemeKey } from "@frontend/design-system-core/themes";
import { BaseConfig } from "./manager";
import { PollingOptions } from "@peersyst/react-utils/@types/polling";
import { ChainType } from "xchain-sdk";
import { WalletProviderDef, WalletProviderId } from "@frontend/wallet/providers";
import { AnyObject } from "@swisstype/essential";

export interface CoreConfig extends BaseConfig {
    projectName: string;
    publicUrl: string;
    backendUrl: string;
    theme: ThemeKey;
    maxNumberDecimals: number;
    txValidationPolling: PollingOptions;
    peersystUrl: string;
    walletProviders: Record<WalletProviderId, WalletProviderDef>;
    balanceRefetchInterval: number;
    posthog: {
        apiKey: string;
        host: string;
    };
    footerLinks: {
        discord: string;
        x: string;
        featureRequest: string;
    };
    axelar: {
        url: string;
        apiUrl: string;
        chainIds: Record<string, boolean>;
        additionalChainData: Record<string, AnyObject>;
        extraChains: AnyObject[];
    };

    xumm: {
        statusInterval: number;
        maxNumberOfRetries: number;
    };
    destinationCanReceiveRefetchInterval: number;
    destinationIsActiveRefetchInterval: number;
    explorerPaths: Record<ChainType, { account: string; transaction: string }>;
    attestationsPolling: PollingOptions;
}
export interface Config extends CoreConfig {}

export type StaticConfig = Omit<Config, "minVersion">;

export type ProviderConfig = Omit<Config, "version">;
