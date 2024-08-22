import { useStore } from "zustand";
import { settingsState } from "../../domain/settings.state";

export const useSettingsState = () => useStore(settingsState);
