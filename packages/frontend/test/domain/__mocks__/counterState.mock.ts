import State from "domain/common/State";
import createMock from "../../util/createMock";
import MethodMock from "../../util/MethodMock";

export default createMock<State<number>>({
    getState: new MethodMock("mockReturnValue", 0),
    setState: new MethodMock("mockReturnValue"),
});
