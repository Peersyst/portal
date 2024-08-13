import KeyValueStorageRepository from "@/data-access/repository/common/KeyValueStorageRepository";
import { createGlobalMock, MethodMock } from "@peersyst/test-utils";

export interface ImplementedKeyValueStorageRepository {
    set(key: string, value: any): Promise<void>;
    get(key: string): Promise<unknown | undefined>;
    getKeys(): Promise<string[]>;
    clearKey(key: string): Promise<void>;
    clearKeys(keys: string[]): Promise<void>;
    clear(): Promise<void>;
}

export default createGlobalMock(KeyValueStorageRepository.prototype as unknown as ImplementedKeyValueStorageRepository, {
    set: new MethodMock("mockResolvedValue"),
    get: new MethodMock("mockResolvedValue", "test"),
    getKeys: new MethodMock("mockResolvedValue", ["test"]),
    clearKey: new MethodMock("mockResolvedValue"),
    clearKeys: new MethodMock("mockResolvedValue"),
    clear: new MethodMock("mockResolvedValue"),
});
