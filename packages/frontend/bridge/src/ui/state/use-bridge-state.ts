import { useStore } from "zustand";
import { bridgeState } from "../../domain/states/bridge.state";

/**
 * Subscribes to the bridge state.
 * @returns The bridge state.
 */
export const useBridgeState = () => useStore(bridgeState, ({ bridge }) => bridge);
