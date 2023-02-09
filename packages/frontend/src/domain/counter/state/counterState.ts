import { createStore } from "zustand/vanilla";

export type ICounterState = number;

const counterState = createStore<ICounterState>(() => 0);

export default counterState;
