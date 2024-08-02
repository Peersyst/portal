import { forwardQueryPlugin, ForwardedQueryPlugin } from "../forwardQueryPlugin";
import { onlineQueryPlugin } from "./onlineQueryPlugin";
import { useIsOnline } from "@/ui/network/hooks/useIsOnline";

export interface UseOnlineQueryPluginOptions {
    requireNetwork?: boolean;
}

/**
 * A hook to automatically enable or disable a query base on the connection status using `onlineQueryPlugin`
 * @returns The forwarded `onlineQueryPlugin`
 */
export function useOnlineQueryPlugin({ requireNetwork }: UseOnlineQueryPluginOptions = {}): ForwardedQueryPlugin {
    const isOnline = useIsOnline({ requireNetwork });

    return forwardQueryPlugin((queryKey, queryFn, options) => onlineQueryPlugin(queryKey, queryFn, { ...options, isConnected: isOnline }));
}
