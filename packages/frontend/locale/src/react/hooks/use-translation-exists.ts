import { ExistsFunction, FlatNamespace, KeyPrefix, TOptions } from "i18next";
import { FallbackNs, useTranslation } from "react-i18next";
import { $Dictionary, $Tuple } from "../types";

/**
 * Provides a function that checks if a translation exists.
 * @returns A function that takes a key and an options object and returns a boolean.
 */
export function useTranslationExists<
    Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
    KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(): ExistsFunction {
    const { i18n } = useTranslation<Ns, KPrefix>();

    return <TKeys extends string = string, TInterpolationMap extends object = $Dictionary>(
        key: TKeys | TKeys[],
        options?: TOptions<TInterpolationMap>,
    ) => {
        return i18n.exists(key, options as any /* Odd complaining about the same type :/ */);
    };
}
