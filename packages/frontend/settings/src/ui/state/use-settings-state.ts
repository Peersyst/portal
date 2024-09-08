import { useStore } from "zustand";
import { settingsState } from "../../domain/settings.state";
import { Settings } from "../../common";

export const useSettingsState = (): Settings => useStore(settingsState);
