import LocalStorageRepository from "data-access/repository/common/LocalStorageRepository";
import createGlobalMock from "../../util/createGlobalMock";
import MethodMock from "../../util/MethodMock";

export default createGlobalMock(LocalStorageRepository.prototype, {
    get: new MethodMock("mockResolvedValue", "test"),
    set: new MethodMock("mockResolvedValue"),
});
