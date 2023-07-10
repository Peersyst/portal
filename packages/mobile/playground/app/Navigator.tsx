import { useTheme } from "@peersyst/react-native-components";
import { emphasize } from "@peersyst/react-utils";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useMemo } from "react";
import playgrounds from "../playgrounds";
import { SwitchThemeButton } from "./components";

const Drawer = createDrawerNavigator();
export interface NavigatorProps {
    onReady?: (() => void) | undefined;
}

const Navigator = (props: NavigatorProps) => {
    const theme = useTheme();

    const navigationTheme = useMemo(() => {
        return {
            ...DefaultTheme,
            dark: theme.palette.mode === "dark",
            colors: {
                ...DefaultTheme.colors,
                primary: theme.palette.primary,
                background: theme.palette.background,
                card: theme.palette.background,
                text: theme.palette.text,
                border: emphasize(theme.palette.background, 0.2),
                notification: theme.palette.primary,
            },
        };
    }, [theme]);

    return (
        <NavigationContainer theme={navigationTheme} {...props}>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerRight: () => <SwitchThemeButton />,
                }}
            >
                {Object.values(playgrounds).map(({ name, component }) => (
                    <Drawer.Screen key={name} name={name} component={component} />
                ))}
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
