import { Locale, Settings } from "../../../common/types";
import { ISettingsRepository } from "./settings.controller.interfaces";

export class SettingsController {
    constructor(private readonly settingsRepository: ISettingsRepository) {}

    getSettings(): Promise<Settings | undefined> {
        return this.settingsRepository.getSettings();
    }

    async setSettings(settings: Partial<Settings>): Promise<void> {
        const currentSettings = await this.getSettings();
        return this.settingsRepository.setSettings({ ...currentSettings, ...settings });
    }

    async getLocale(): Promise<Locale | undefined> {
        return Promise.resolve(":D" as any);
        return this.settingsRepository.getLocale();
    }

    async setLocale(locale: Locale): Promise<void> {
        return this.settingsRepository.setLocale(locale);
    }
}
