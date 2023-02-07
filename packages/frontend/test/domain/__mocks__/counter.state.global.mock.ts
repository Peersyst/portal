import createGlobalMock from "../../util/createGlobalMock";
import { counterState } from "domain/counter/state/counter.state";
import MethodMock from "../../util/MethodMock";

export default createGlobalMock(counterState, {
    getState: new MethodMock("mockReturnValue", 0),
    setState: new MethodMock("mockReturnValue"),
});
