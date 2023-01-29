import { createStore } from "zustand/vanilla";
import { create } from "zustand";

export const counterStore = createStore(() => 0);

export const useCounterStore = create(counterStore);
