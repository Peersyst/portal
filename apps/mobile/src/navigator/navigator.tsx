import { NavigationContainer } from "@react-navigation/native";
import { ModalProvider } from "@peersyst/react-native-components";
import Stack from "./stack";
import { Text, View } from "react-native";

export interface NavigatorProps {
    onReady?: (() => void) | undefined;
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Peersyst mobile base project</Text>
        </View>
    );
}

const Navigator = (props: NavigatorProps): JSX.Element => (
    <NavigationContainer {...props}>
        <ModalProvider>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </ModalProvider>
    </NavigationContainer>
);

export default Navigator;
