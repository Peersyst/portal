import { WalletProviderId } from "@frontend/wallet/providers";
import { JSXElementConstructor } from "react";
import { WalletConnectionProps } from "./wallet-connection.types";
import { MetamaskConnection } from "./metamask-connection/metamask-connection";
import { XrplFaucetConnection } from "./xrpl-faucet-connection/xrpl-faucet-connection";

export const WALLET_CONNECTIONS: Record<WalletProviderId, JSXElementConstructor<WalletConnectionProps>> = {
    metamask: MetamaskConnection,
    xrplFaucet: XrplFaucetConnection,
};
