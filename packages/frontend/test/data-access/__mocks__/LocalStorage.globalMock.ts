import createGlobalMock from "../../util/createGlobalMock";
import MethodMock from "../../util/MethodMock";

export default createGlobalMock(Storage.prototype, {
    getItem: new MethodMock("mockReturnValue", "test"),
    setItem: new MethodMock("mockReturnValue"),
    removeItem: new MethodMock("mockReturnValue"),
});
