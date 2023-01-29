import { useCounterStore } from "store/counter/counter.store";
import ControllerFactory from "../../adapter/controller.factory";
import Counter from "../component/Counter";

export default function StoreCounter(): JSX.Element {
    const counter = useCounterStore();

    const handleIncrement = () => {
        ControllerFactory.getCounterController().increment();
    };

    return <Counter value={counter} onIncrement={handleIncrement} />;
}
