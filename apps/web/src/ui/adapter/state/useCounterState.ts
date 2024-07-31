import counterState from "domain/counter/state/counterState";
import { useStore } from "zustand";

const useCounterState = () => useStore(counterState);

export default useCounterState;
