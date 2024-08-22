import { StateManager } from "@frontend/core/domain/state/manager";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Set persistence storage to persist states
StateManager.setPersistenceStorage(AsyncStorage);
