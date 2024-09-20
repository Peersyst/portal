import { useBridgeTokenState } from "../state";

/**
 * Checks if the bridge token is set.
 * @returns True if the bridge token is set, false otherwise.
 */
export function useIsBridgeTokenSet(): boolean {
    const token = useBridgeTokenState();
    return !!token;
}
