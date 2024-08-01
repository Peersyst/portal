import { NavigationContainer } from "@react-navigation/native";
import { ModalProvider } from "@peersyst/react-native-components";
import Stack from "./Stack";
import { Text, View } from "react-native";

export interface NavigatorProps {
    onReady?: (() => void) | undefined;
}

const Navigator = (props: NavigatorProps): JSX.Element => (
    <NavigationContainer {...props}>
        <ModalProvider>
            <Stack.Navigator screenOptions={{ contentStyle: { padding: 10 } }}>
                <View>
                    <Text>Peersyst mobile base project</Text>
                </View>
            </Stack.Navigator>
        </ModalProvider>
    </NavigationContainer>
);

export default Navigator;
