import { useTranslation, UseTranslationOptions } from "react-i18next";
import { KeyPrefix, Namespace, TFunction, TypeOptions } from "i18next";

export default function <N extends Namespace = TypeOptions["defaultNS"], TKPrefix extends KeyPrefix<N> = undefined>(
    ns?: N | Readonly<N>,
    options?: UseTranslationOptions<TKPrefix>,
): TFunction<N, TKPrefix> {
    return useTranslation<N, TKPrefix>(ns, options).t;
}
