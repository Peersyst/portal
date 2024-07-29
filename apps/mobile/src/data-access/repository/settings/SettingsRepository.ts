import StorageRepository from "../common/StorageRepository";
import { ISettingsRepository } from "../../../domain/adapter/repository/ISettingsRepository";
import { Locale, Settings } from "common/models";

export default class SettingsRepository extends StorageRepository<Settings> implements ISettingsRepository {
    constructor() {
        super("settings");
    }

    getSettings(): Promise<Settings | undefined> {
        return this.get();
    }

    async setSettings(settings: Partial<Settings>): Promise<void> {
        const currentSettings = await this.getSettings();
        return this.set({ ...currentSettings, ...settings });
    }

    async getLocale(): Promise<Locale | undefined> {
        const settings = await this.getSettings();
        return settings?.locale;
    }

    async setLocale(locale: Locale): Promise<void> {
        return this.setSettings({ locale });
    }
}
