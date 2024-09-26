import { useStore } from "zustand";
import { bridgeTokenState } from "../../domain/states";

/**
 * Subscribes to the bridge token state.
 * @returns The bridge token state.
 */
export const useBridgeTokenState = () => useStore(bridgeTokenState, (state) => state.bridgeToken);
