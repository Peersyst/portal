import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";

export const counterState = createStore(() => 0);

export const useCounterState = () => useStore(counterState);
