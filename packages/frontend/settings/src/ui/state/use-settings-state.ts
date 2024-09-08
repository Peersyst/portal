import { useStore } from "zustand";
import { settingsState } from "../../domain/settings.state";
import { Settings } from "../../common";

/**
 * Gets the settings state.
 * @returns The settings state.
 */
export const useSettingsState = (): Settings => useStore(settingsState);
