import { Settings } from "@peersyst/common";
import { createState } from "../../../state";

export type ISettingsState = Settings;

export const defaultSettingsState: ISettingsState = {};

export const createSettingsState = () => createState<ISettingsState>("settings-state", () => defaultSettingsState);
