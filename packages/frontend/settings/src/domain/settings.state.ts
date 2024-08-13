import { createState } from "@frontend/core/domain/state";
import { Settings } from "../common/types";

export type ISettingsState = Settings;

export const defaultSettingsState: ISettingsState = {};

export const createSettingsState = () => createState<ISettingsState>("settings-state", () => defaultSettingsState);
