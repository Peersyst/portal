import { Service } from "@frontend/core/data-access/service";

@Service()
export class BrowserLocalizationService {
    /**
     * Gets the browser locale.
     * @returns The browser locale or "en" if the `window` is not defined.
     */
    private getBrowserLocale(): string {
        if (typeof window === "undefined") {
            return "en";
        }

        return window.navigator.language;
    }

    /**
     * Gets the locale.
     * @returns The locale.
     */
    getLocale(): string {
        return this.getBrowserLocale();
    }
}
