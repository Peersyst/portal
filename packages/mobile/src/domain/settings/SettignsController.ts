import { ISettingsRepository } from "domain/adapter/repository/ISettingsRepository";
import { ISettingsController } from "ui/adapter/controllers/ISettingsController";
import { Locale, Settings } from "common/models";

export default class SettingsController implements ISettingsController {
    constructor(private readonly settingsRepository: ISettingsRepository) {}

    getSettings(): Promise<Settings | undefined> {
        return this.settingsRepository.getSettings();
    }

    async setSettings(settings: Partial<Settings>): Promise<void> {
        const currentSettings = await this.getSettings();
        return this.settingsRepository.setSettings({ ...currentSettings, ...settings });
    }

    async getLocale(): Promise<Locale | undefined> {
        return this.settingsRepository.getLocale();
    }

    async setLocale(locale: Locale): Promise<void> {
        return this.settingsRepository.setLocale(locale);
    }
}
