import { IStorage, StorageRepository, Repository } from "@frontend/core/data-access/repository";
import { Locale, Settings } from "../../common";

@Repository()
export class SettingsRepository extends StorageRepository<Settings> {
    constructor(storage: IStorage<Settings>) {
        super("settings", storage);
    }

    /**
     * Gets the settings.
     * @returns The settings or undefined if settings are not defined.
     */
    getSettings(): Promise<Settings | undefined> {
        return this.get();
    }

    /**
     * Sets the settings.
     * @param settings The settings to set.
     * @returns A promise that resolves when the settings are set.
     */
    async setSettings(settings: Partial<Settings>): Promise<void> {
        const currentSettings = await this.getSettings();
        return this.set({ ...currentSettings, ...settings });
    }

    /**
     * Gets the locale.
     * @returns The locale or undefined if the locale is not defined.
     */
    async getLocale(): Promise<Locale | undefined> {
        const settings = await this.getSettings();
        return settings?.locale;
    }

    /**
     * Sets the locale.
     * @param locale The locale to set.
     * @returns A promise that resolves when the locale is set.
     */
    async setLocale(locale: Locale): Promise<void> {
        return this.setSettings({ locale });
    }
}
