import { StateManager } from "@peersyst/domain";

// Set persistence storage to persist states
StateManager.setPersistenceStorage(localStorage);
// Create states
StateManager.createStates({});
