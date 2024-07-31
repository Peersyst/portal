import { Config } from "../types";
import { IConfigStorage } from "../manager";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Implementation of IConfigStorage using react-native's AsyncStorage
 */
export class ReactNativeAsyncConfigStorage implements IConfigStorage<Config> {
    private readonly storageKey = "config";

    async get(): Promise<Config | undefined> {
        const config = await AsyncStorage.getItem(this.storageKey);
        return config ? JSON.parse(config) : undefined;
    }

    set(config: Config): Promise<void> {
        return AsyncStorage.setItem(this.storageKey, JSON.stringify(config));
    }

    clear(): Promise<void> {
        return AsyncStorage.removeItem(this.storageKey);
    }
}
