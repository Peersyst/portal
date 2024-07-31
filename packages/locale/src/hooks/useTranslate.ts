import { FallbackNs, useTranslation, UseTranslationOptions, UseTranslationResponse } from "react-i18next";
import { FlatNamespace, KeyPrefix } from "i18next";
import { $Tuple } from "react-i18next/helpers";

export function useTranslate<
    Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
    KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(ns?: Ns, options?: UseTranslationOptions<KPrefix>): UseTranslationResponse<FallbackNs<Ns>, KPrefix>["t"] {
    return useTranslation<Ns, KPrefix>(ns, options).t;
}
