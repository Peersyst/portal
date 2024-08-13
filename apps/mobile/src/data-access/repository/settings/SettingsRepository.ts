import { ISettingsRepository } from "@peersyst/domain";
import StorageRepository from "../common/StorageRepository";
import { Locale, Settings, Theme } from "@peersyst/common";

export default class SettingsRepository extends StorageRepository<Settings> implements ISettingsRepository {
    constructor() {
        super("settings");
    }

    /**
     * Gets the settings
     */
    getSettings(): Promise<Settings | undefined> {
        return this.get();
    }

    /**
     * Sets the settings
     * @param settings
     */
    async setSettings(settings: Partial<Settings>): Promise<void> {
        const currentSettings = await this.getSettings();
        return this.set({ ...currentSettings, ...settings });
    }

    /**
     * Gets the locale
     */
    async getLocale(): Promise<Locale | undefined> {
        const settings = await this.getSettings();
        return settings?.locale;
    }

    /**
     * Sets the locale
     * @param locale
     */
    async setLocale(locale: Locale): Promise<void> {
        return this.setSettings({ locale });
    }

    /**
     * Gets the theme
     */
    async getTheme(): Promise<Theme | undefined> {
        const settings = await this.getSettings();
        return settings?.theme;
    }

    /**
     * Sets the theme
     * @param theme
     */
    async setTheme(theme: Theme): Promise<void> {
        return this.setSettings({ theme });
    }

    /**
     * Clears settings
     */
    async clearSettings(): Promise<void> {
        return this.clear();
    }
}
