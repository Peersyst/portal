import { Locale, Settings } from "@frontend/settings";

export interface ISettingsRepository {
    getSettings(): Promise<Settings | undefined>;
    setSettings(settings: Partial<Settings>): Promise<void>;
    getLocale(): Promise<Locale | undefined>;
    setLocale(locale: Locale): Promise<void>;
}
