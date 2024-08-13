import { JSXElementConstructor } from "react";
import { useWindowDimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export interface Playground {
    name: string;
    component: JSXElementConstructor<{}>;
}

/**
 * Creates a playground component
 * @param name Unique name for the playground
 * @param Component Component to render
 * @param props Props to pass to the component
 */
export default function playground<P>(name: string, Component: JSXElementConstructor<P>, props?: P): Playground {
    return {
        name,
        component: function PlaygroundComponent(): JSX.Element {
            const { height } = useWindowDimensions();

            return (
                <KeyboardAwareScrollView
                    alwaysBounceVertical={false}
                    style={{ height }}
                    contentContainerStyle={{
                        minHeight: "85%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Component {...(props as any)} />
                </KeyboardAwareScrollView>
            );
        },
    };
}
