import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export interface SearchParamOptions {
    validation?: (value: string) => boolean;
    fallback?: string;
}

/**
 * Flexible to use search parameter group.
 * @param params An array of search parameters.
 * @returns A tuple containing the search parameter group and a function to set the search parameter group.
 */
export function useSearchParamGroup<K extends string = string>(
    ...params: (K | [K, SearchParamOptions])[]
): [Record<K, string | undefined>, (values: Partial<Record<K, string | undefined>>) => void] {
    const [searchParams, setSearchParams] = useSearchParams();

    const setSearchParamGroup = (values: Partial<Record<K, string | undefined>>) => {
        for (const [key, value] of Object.entries(values)) {
            if (value) searchParams.set(key, value as string);
            else searchParams.delete(key);
        }
        setSearchParams(searchParams);
    };

    const searchParamGroup = useMemo(
        () =>
            params.reduce(
                (acc, param) => {
                    const key = Array.isArray(param) ? param[0] : param;
                    acc[key] = searchParams.get(key) || undefined;
                    return acc;
                },
                {} as Record<string, string | undefined>,
            ),
        [searchParams, params],
    );

    useEffect(() => {
        let valid = true;
        const correctedValues = {} as Partial<Record<K, string | undefined>>;

        for (const param of params) {
            if (typeof param === "string" || !param[1].validation) continue;

            const key = param[0];
            const value = searchParamGroup[key];

            if (value && !param[1].validation(value)) {
                valid = false;
                correctedValues[key as K] = param[1].fallback;
            }
        }

        if (!valid) setSearchParamGroup(correctedValues);
    }, [searchParamGroup]);

    return [searchParamGroup, setSearchParamGroup];
}
