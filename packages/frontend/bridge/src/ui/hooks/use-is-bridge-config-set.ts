import { useBridgeState } from "../state/use-bridge-state";

/**
 * Checks if the bridge config is set.
 * @returns `true` if the bridge config is set, `false` otherwise.
 */
export function useIsBridgeConfigSet(): boolean {
    const bridge = useBridgeState();

    return !!bridge;
}
