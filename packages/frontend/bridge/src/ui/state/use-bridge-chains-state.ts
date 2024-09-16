import { useStore } from "zustand";
import { bridgeChainsState } from "../../domain/states/bridge-chains.state";

/**
 * Subscribes to the bridge chains state.
 * @returns The bridge chains state.
 */
export const useBridgeChainsState = () => useStore(bridgeChainsState);
