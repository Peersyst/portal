import { createGlobalMock, MethodMock } from "@peersyst/test-utils";
import SecureStorageRepository from "@/data-access/repository/common/SecureStorageRepository";

export default createGlobalMock(SecureStorageRepository.prototype as unknown as { get: () => any; set: () => any; clear: () => any }, {
    get: new MethodMock("mockResolvedValue", "test"),
    set: new MethodMock("mockResolvedValue"),
    clear: new MethodMock("mockResolvedValue"),
});
