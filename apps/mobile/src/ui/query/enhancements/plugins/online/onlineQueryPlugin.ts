import { QueryPluginFn, QueryPluginKey, QueryPluginOptions, QueryPluginResult } from "../../types";

export type OnlineQueryPluginOptions = QueryPluginOptions & {
    isConnected: boolean;
};

/**
 * Query plugin to automatically enable or disable a query based on the connection status
 * @param queryKey The query key
 * @param queryFn The query function
 * @param options The online query plugin options
 */
export function onlineQueryPlugin(
    queryKey: QueryPluginKey,
    queryFn: QueryPluginFn,
    { isConnected, refetchOnMount, ...options }: OnlineQueryPluginOptions,
): QueryPluginResult {
    return [
        queryKey,
        queryFn,
        {
            ...options,
            enabled: isConnected && options?.enabled !== false,
            refetchOnMount: isConnected ? refetchOnMount : false,
        },
    ];
}
