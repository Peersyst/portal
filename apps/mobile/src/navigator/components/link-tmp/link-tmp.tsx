import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { LinkProps } from "./Link.types";

const Link = ({ to, onPress, children, ...linkProps }: LinkProps): JSX.Element => {
    const navigation = useNavigation();

    const handlePress = () => {
        onPress?.();
        // @ts-ignore TODO: Fix these types
        if (typeof to === "string") navigation.navigate(to as any);
        // @ts-ignore TODO: Fix these types
        else navigation.navigate(to.screen as any, to.params as any);
    };

    return (
        <Pressable onPress={handlePress} {...linkProps}>
            {children}
        </Pressable>
    );
};

export default Link;
