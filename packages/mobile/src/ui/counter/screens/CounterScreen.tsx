import { SafeAreaView } from "react-native-safe-area-context";
import StoreCounter from "../containers/StoreCounter";

const CounterScreen = (): JSX.Element => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StoreCounter />
        </SafeAreaView>
    );
};

export default CounterScreen;
