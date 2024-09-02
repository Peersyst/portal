import { IStorage, StorageRepository, Repository } from "@frontend/core/data-access/repository";
import { Locale, Settings } from "../../common";

@Repository()
export class SettingsRepository extends StorageRepository<Settings> {
    constructor(storage: IStorage<Settings>) {
        super("settings", storage);
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
