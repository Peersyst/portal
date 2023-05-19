import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import playgrounds from "./playgrounds";
import Providers from "../src/ui/Providers";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Providers>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    {Object.values(playgrounds).map(({ name, component }) => (
                        <Drawer.Screen key={name} name={name} component={component} />
                    ))}
                </Drawer.Navigator>
            </NavigationContainer>
        </Providers>
    );
}
