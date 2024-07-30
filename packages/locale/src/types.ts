import { Locale } from "@cbdc-wallet/common";
import { resources } from "./resources";

export type LocaleType = Locale;
export type LocaleResource = (typeof resources)["en"];
export type LocaleNamespace = keyof LocaleResource;
export type LocaleErrorResource = keyof LocaleResource["error"];
export type LocaleTranslationResource = keyof LocaleResource["translation"];
export type LocaleCountryResource = keyof LocaleResource["country"];
export type LocaleLanguageResource = keyof LocaleResource["language"];
export type LocaleTagKey = keyof LocaleResource["tags"];
