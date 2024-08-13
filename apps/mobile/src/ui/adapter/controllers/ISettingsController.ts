import { Settings, Locale, Theme } from "@peersyst/common";
import { ISettingsController as IDomainSettingsController } from "@peersyst/domain";
export interface ISettingsController extends IDomainSettingsController {
    getSettings(): Promise<Settings | undefined>;
    setSettings(settings: Partial<Settings>): Promise<void>;
    setLocale(locale: Locale): Promise<void>;
    getTheme(): Promise<Theme | undefined>;
    setTheme(theme: Theme): Promise<void>;
}
