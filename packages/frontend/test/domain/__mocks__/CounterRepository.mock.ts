import { ICounterRepository } from "domain/adapter/repositories/CounterRepository.interface";
import createMock from "../../util/createMock";
import MethodMock from "../../util/MethodMock";

export default createMock<ICounterRepository>({
    getCount: new MethodMock("mockResolvedValue", 0),
    setCount: new MethodMock("mockResolvedValue"),
});
