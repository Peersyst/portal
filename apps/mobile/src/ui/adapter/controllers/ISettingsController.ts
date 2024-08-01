import { Settings, Locale } from "@peersyst/common";

export interface ISettingsController {
    getSettings(): Promise<Settings | undefined>;
    setSettings(settings: Partial<Settings>): Promise<void>;
    getLocale(): Promise<Locale | undefined>;
    setLocale(locale: Locale): Promise<void>;
}
