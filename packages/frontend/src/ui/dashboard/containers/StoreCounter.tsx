import Counter from "../components/display/Counter";
import { useCounterState } from "../../../domain/counter/state/counter.state";
import ControllerFactory from "../../adapter/ControllerFactory";

export default function StoreCounter(): JSX.Element {
    const counter = useCounterState();

    const handleIncrement = () => {
        ControllerFactory.counterController.increment();
    };

    return <Counter value={counter} onIncrement={handleIncrement} />;
}
