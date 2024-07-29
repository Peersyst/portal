import Stack from "ui/navigator/Stack";
import CounterScreen from "../screens/CounterScreen";

export enum CounterScreens {
    MAIN = "Main",
}

export type CounterParamsList = {
    [CounterScreens.MAIN]: undefined;
};

export const CounterNavigator = (
    <>
        <Stack.Screen name={CounterScreens.MAIN} component={CounterScreen} />
    </>
);
