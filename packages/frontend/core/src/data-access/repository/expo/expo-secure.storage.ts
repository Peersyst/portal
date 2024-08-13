import { IStorage } from "../storage";
import * as SecureStorage from "expo-secure-store";

export const expoSecureStorage: IStorage = {
    setItem(key: string, value: any): Promise<void> {
        return SecureStorage.setItemAsync(key, JSON.stringify(value));
    },
    async getItem(key: string): Promise<any> {
        const item = await SecureStorage.getItemAsync(key);
        return item ? JSON.parse(item) : undefined;
    },
    removeItem(key: string): Promise<void> {
        return SecureStorage.deleteItemAsync(key);
    },
};
