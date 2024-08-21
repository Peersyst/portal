import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Settings } from "../../common";
import { getInstance } from "@frontend/core/common/utils/singleton";
import { SettingsController } from "../../domain/controllers";
import { UseExternalQueryOptions } from "@frontend/query/react";

export function getSettingsQueryKey(): any[] {
    return ["settings"];
}

export function useGetSettings<TData = Settings | undefined>(
    options?: UseExternalQueryOptions<Settings | undefined, Error, TData>,
): UseQueryResult<TData> {
    const queryKey = getSettingsQueryKey();

    return useQuery({
        queryKey,
        queryFn: () => getInstance(SettingsController).getSettings(),
        ...options,
    });
}
