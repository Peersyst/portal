import { State } from "@frontend/core/domain/state";
import { Controller } from "@frontend/core/domain/controller";
import { Locale, Settings } from "../../../common/types";
import { ISettingsState } from "../../settings.state";
import { supportedLocales } from "../../../common";
import { ILocalizationService, ISettingsRepository } from "../../interfaces";

@Controller()
export class SettingsController {
    constructor(
        private readonly settingsRepository: ISettingsRepository,
        private readonly localizationService: ILocalizationService,
        readonly settingsState: State<ISettingsState>,
    ) {}

    /**
     * Gets the settings.
     * @returns The settings or undefined if the settings are not defined.
     */
    getSettings(): Promise<Settings | undefined> {
        return this.settingsRepository.getSettings();
    }

    /**
     * Sets the settings.
     * @param settings The settings to set.
     * @returns A promise that resolves when the settings are set.
     */
    async setSettings(settings: Partial<Settings>): Promise<void> {
        this.settingsState.setState(settings);
        return this.settingsRepository.setSettings(settings);
    }

    /**
     * Gets the locale.
     * @returns The locale or undefined if the locale is not defined.
     */
    async getLocale(): Promise<Locale | undefined> {
        const locale = (await this.settingsRepository.getLocale()) || this.localizationService.getLocale();

        const systemLocaleEnd = locale.slice(-2).toLowerCase();
        const systemLocaleStart = locale.slice(0, 2).toLowerCase();
        return supportedLocales.find((l) => systemLocaleStart === l || systemLocaleEnd === l) ?? "en";
    }

    /**
     * Sets the locale.
     * @param locale The locale to set.
     * @returns A promise that resolves when the locale is set.
     */
    async setLocale(locale: Locale): Promise<void> {
        this.settingsState.setState({ locale });
        return this.settingsRepository.setLocale(locale);
    }
}
