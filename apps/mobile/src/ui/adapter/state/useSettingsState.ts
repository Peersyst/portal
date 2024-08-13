import { StateManager } from "@peersyst/domain";
import { useStore } from "zustand";

const useSettingsState = () => useStore(StateManager.states.settings);

export default useSettingsState;
