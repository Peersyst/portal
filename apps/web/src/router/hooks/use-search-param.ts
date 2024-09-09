import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface UseSearchParamOptions<T = string> {
    parse?: (value: string) => T;
    validation?: (value: string) => boolean;
    fallback?: T;
}

/**
 * Flexible to use search parameter.
 * @param key The search parameter key.
 * @param options The options for the search parameter.
 * @returns A tuple containing the search parameter and a function to set the search parameter.
 */
export function useSearchParam<T = string>(
    key: string,
    { parse = (value: string) => value as T, validation, fallback }: UseSearchParamOptions<T> = {},
): [T | undefined, (value: T | undefined) => void] {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchParamValue, setSearchParamValue] = useState<string | undefined>();

    useEffect(() => {
        const value = searchParams.get(key) || undefined;
        if (value && validation && !validation(value)) setSearchParam(fallback);
        else setSearchParamValue(value);
    }, [searchParams.get(key)]);

    const setSearchParam = (value: T | undefined) => {
        if (value) searchParams.set(key, value.toString());
        else searchParams.delete(key);
        setSearchParams(searchParams);
    };

    return [searchParamValue ? parse(searchParamValue) : undefined, setSearchParam];
}
