import ControllerFactory from "ui/adapter/ControllerFactory";
import useCounterState from "ui/adapter/state/useCounterState";
import Counter from "ui/counter/components/display/Counter";

export default function StoreCounter(): JSX.Element {
    const counter = useCounterState();

    const handleIncrement = () => {
        ControllerFactory.counterController.increment();
    };

    return <Counter value={counter} onIncrement={handleIncrement} />;
}
