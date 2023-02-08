import { createStore } from "zustand/vanilla";

const counterState = createStore(() => 0);

export default counterState;
