import { Settings, Locale, Theme } from "@peersyst/common";

export interface ISettingsRepository {
    getSettings(): Promise<Settings | undefined>;
    setSettings(settings: Partial<Settings>): Promise<void>;
    getLocale(): Promise<Locale | undefined>;
    setLocale(locale: Locale): Promise<void>;
    getTheme(): Promise<Theme | undefined>;
    setTheme(theme: Theme): Promise<void>;
    clearSettings(): Promise<void>;
}
