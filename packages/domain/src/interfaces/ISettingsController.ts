import { Locale } from "@peersyst/common";
import { ISettingsState } from "../modules/settings/state";
import { ControllerWithState } from "../state";

export interface ISettingsController extends ControllerWithState<{ settings: ISettingsState }> {
    getLocale(): Promise<Locale>;
}
