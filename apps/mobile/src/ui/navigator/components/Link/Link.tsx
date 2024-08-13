import { useNavigation } from "@react-navigation/native";
import { LinkProps } from "./Link.types";
import { Pressable } from "react-native";

const Link = ({ to, onPress, children, ...linkProps }: LinkProps): JSX.Element => {
    const navigation = useNavigation();

    const handlePress = () => {
        onPress?.();
        if (typeof to === "string") navigation.navigate(to);
        else navigation.navigate(to.screen as any, to.params as any);
    };

    return (
        <Pressable onPress={handlePress} {...linkProps}>
            {children}
        </Pressable>
    );
};

export default Link;
