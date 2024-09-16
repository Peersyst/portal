import { useBridgeWalletsState } from "../state/use-bridge-wallets-state";

/**
 * Checks if the wallets are connected.
 * @returns `true` if the wallets are connected, `false` otherwise.
 */
export function useAreWalletsConnected(): boolean {
    const { destinationWallet, originWallet } = useBridgeWalletsState();

    return destinationWallet.connection === "connected" && originWallet.connection === "connected";
}
