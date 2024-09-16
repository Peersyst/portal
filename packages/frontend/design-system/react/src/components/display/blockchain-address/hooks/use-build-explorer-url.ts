import { ChainType } from "xchain-sdk";
import { useConfig } from "@frontend/config/react";
import { BlockchainAddressType } from "../blockchain-address.types";

/**
 * Builds the explorer URL for a given blockchain address.
 * @param explorerUrl The base URL of the explorer.
 * @param chainType The type of chain.
 * @param address The address to build the URL for.
 * @param type The type of address.
 * @returns The explorer URL.
 */
export function useBuildExplorerUrl(explorerUrl: string | undefined, chainType: ChainType, address: string, type: BlockchainAddressType) {
    const explorerPaths = useConfig("explorerPaths");

    return `${explorerUrl?.replace(/\/$/, "")}/${explorerPaths[chainType][type].replace(/\/$/, "")}/${address}`;
}
