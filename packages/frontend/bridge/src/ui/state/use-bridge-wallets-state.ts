import { useStore } from "zustand";
import { bridgeWalletsState } from "../../domain/states/bridge-wallets.state";

/**
 * Subscribes to the bridge wallets state.
 * @returns The bridge wallets state.
 */
export const useBridgeWalletsState = () => useStore(bridgeWalletsState);
