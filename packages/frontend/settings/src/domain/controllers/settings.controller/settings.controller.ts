import { State } from "@frontend/core/domain/state";
import { Locale, Settings } from "../../../common/types";
import { ISettingsRepository } from "./settings.controller.interfaces";
import { ISettingsState } from "../../settings.state";

export class SettingsController {
    constructor(private readonly settingsRepository: ISettingsRepository, readonly settingsState: State<ISettingsState>) {}

    getSettings(): Promise<Settings | undefined> {
        return this.settingsRepository.getSettings();
    }

    async setSettings(settings: Partial<Settings>): Promise<void> {
        this.settingsState.setState(settings);
        return this.settingsRepository.setSettings(settings);
    }

    async getLocale(): Promise<Locale | undefined> {
        return this.settingsRepository.getLocale();
    }

    async setLocale(locale: Locale): Promise<void> {
        this.settingsState.setState({ locale });
        return this.settingsRepository.setLocale(locale);
    }
}
