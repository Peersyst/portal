import { StateManager } from "@peersyst/domain";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Set persistence storage to persist states
StateManager.setPersistenceStorage(AsyncStorage);
// Create states
StateManager.createStates({});
