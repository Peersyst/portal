import { BridgeSource } from "xchain-sdk";
import { ConnectedBridgeWallet } from "../../common/types";
import { useBridgeSourceWalletState } from "./use-bridge-source-wallet-state";

/**
 * Gets the connected bridge wallet state for the given bridge source.
 * @param source The bridge source.
 * @returns The connected bridge wallet state for the given bridge source.
 */
export function useConnectedBridgeSourceWalletState(source: BridgeSource): ConnectedBridgeWallet | undefined {
    return useBridgeSourceWalletState(source, (wallet) => (wallet.connection === "connected" ? wallet : undefined));
}
