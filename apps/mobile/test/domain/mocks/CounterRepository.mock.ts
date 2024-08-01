import { ICounterRepository } from "@/domain/adapter/repository/ICounterRepository";
import createMock from "../../utils/createMock";
import MethodMock from "../../utils/MethodMock";

export default createMock<ICounterRepository>({
    getCount: new MethodMock("mockResolvedValue", 0),
    setCount: new MethodMock("mockResolvedValue"),
});
