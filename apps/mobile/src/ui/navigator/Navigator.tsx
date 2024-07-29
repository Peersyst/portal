import { NavigationContainer } from "@react-navigation/native";
import { ModalProvider } from "@peersyst/react-native-components";
import Stack from "./Stack";
import { CounterNavigator, CounterScreens } from "ui/counter/navigator/CounterNavigator";

export interface NavigatorProps {
    onReady?: (() => void) | undefined;
}

const Navigator = (props: NavigatorProps): JSX.Element => (
    <NavigationContainer {...props}>
        <ModalProvider>
            <Stack.Navigator screenOptions={{ contentStyle: { padding: 10 } }} initialRouteName={CounterScreens.MAIN}>
                {CounterNavigator}
            </Stack.Navigator>
        </ModalProvider>
    </NavigationContainer>
);

export default Navigator;
