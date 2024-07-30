import { Locale } from "@peersyst/common";
import { resources } from "./resources";

export type LocaleType = Locale;
export type LocaleResource = (typeof resources)["en"];
export type LocaleNamespace = keyof LocaleResource;
export type LocaleTranslationResource = keyof LocaleResource["translation"];
export type LocaleLanguageResource = keyof LocaleResource["language"];
