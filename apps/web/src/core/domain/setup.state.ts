import { StateManager } from "@frontend/core/domain/state";

// Set persistence storage to persist states
StateManager.setPersistenceStorage(localStorage);
// Create states
StateManager.createStates({});
