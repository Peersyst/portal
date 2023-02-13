import State from "domain/common/State";
import createMock from "../../utils/createMock";
import MethodMock from "../../utils/MethodMock";

export default createMock<State<number>>({
    getState: new MethodMock("mockReturnValue", 0),
    setState: new MethodMock("mockReturnValue"),
});
