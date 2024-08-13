import { Locale, Settings, supportedLocales, Theme } from "@peersyst/common";
import { ISettingsState } from "../state/settingsState";
import { ISettingsRepository } from "../../../adapter";
import { State } from "../../../state";
import { ISettingsController } from "../../../interfaces";

export class SettingsController implements ISettingsController {
    constructor(private readonly settingsRepository: ISettingsRepository, public readonly settingsState: State<ISettingsState>) {}

    async onInit(): Promise<void> {
        const settings = await this.getSettings();
        if (settings) this.settingsState.setState(settings);
    }

    /**
     * Gets the settings
     */
    getSettings(): Promise<Settings | undefined> {
        return this.settingsRepository.getSettings();
    }

    /**
     * Sets the settings
     * @param settings
     */
    async setSettings(settings: Partial<Settings>): Promise<void> {
        const currentSettings = await this.getSettings();
        return this.settingsRepository.setSettings({ ...currentSettings, ...settings });
    }

    /**
     * Gets the locale (defaults to device locale)
     */
    async getLocale(): Promise<Locale> {
        const locale = (await this.settingsRepository.getLocale()) || "en";

        const systemLocaleEnd = locale.slice(-2).toLowerCase();
        const systemLocaleStart = locale.slice(0, 2).toLowerCase();
        return supportedLocales.find((l) => systemLocaleStart === l || systemLocaleEnd === l) ?? "en";
    }

    /**
     * Sets the locale
     * @param locale
     */
    async setLocale(locale: Locale): Promise<void> {
        this.settingsState.setState({ locale });

        return await this.settingsRepository.setLocale(locale);
    }

    /**
     * Gets the theme
     */
    async getTheme(): Promise<Theme | undefined> {
        return this.settingsRepository.getTheme();
    }

    /**
     * Sets the theme
     * @param theme
     */
    async setTheme(theme: Theme): Promise<void> {
        this.settingsState.setState({ theme });
        return this.settingsRepository.setTheme(theme);
    }

    /**
     * Clears settings
     */
    async clearSettings(): Promise<void> {
        await this.settingsRepository.clearSettings();
        this.settingsState.reset();
    }
}
