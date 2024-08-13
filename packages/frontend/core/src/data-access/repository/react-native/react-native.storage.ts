import { IStorage } from "../storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const reactNativeStorage: IStorage = {
    setItem(key: string, value: any): Promise<void> {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    },
    async getItem(key: string): Promise<any> {
        const item = await AsyncStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    },
    removeItem(key: string): Promise<void> {
        return AsyncStorage.removeItem(key);
    },
};
