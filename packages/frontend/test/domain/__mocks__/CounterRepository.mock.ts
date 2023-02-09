import { ICounterRepository } from "domain/adapter/repositories/CounterRepository.interface";
import createMock from "../../utils/createMock";
import MethodMock from "../../utils/MethodMock";

export default createMock<ICounterRepository>({
    getCount: new MethodMock("mockResolvedValue", 0),
    setCount: new MethodMock("mockResolvedValue"),
});
