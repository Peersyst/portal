import StorageRepository from "data-access/repository/common/StorageRepository";
import createGlobalMock from "../../utils/createGlobalMock";
import MethodMock from "../../utils/MethodMock";

export default createGlobalMock(StorageRepository.prototype, {
    get: new MethodMock("mockResolvedValue", "test"),
    set: new MethodMock("mockResolvedValue"),
    clear: new MethodMock("mockResolvedValue"),
});
