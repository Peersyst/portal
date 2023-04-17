import playground from "../playground";
import { useState } from "react";
import Counter from "../../src/ui/counter/components/display/Counter";

const CounterPlayground = () => {
    const [count, setCount] = useState(0);
    return <Counter value={count} onIncrement={() => setCount(count + 1)} />;
};

export default playground("Counter", CounterPlayground);
