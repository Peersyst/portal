import { WalletProviderId } from "@frontend/wallet/providers";
import { JSXElementConstructor } from "react";
import { InvalidNetworkProps } from "./invalid-network.types";
import { MetamaskInvalidNetwork } from "./metamask-invalid-network/metamask-invalid-network";

export const INVALID_NETWORKS: Partial<Record<WalletProviderId, JSXElementConstructor<InvalidNetworkProps>>> = {
    metamask: MetamaskInvalidNetwork,
};
