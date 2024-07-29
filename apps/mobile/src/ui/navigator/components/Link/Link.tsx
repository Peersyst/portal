import useNavigator from "ui/navigator/hooks/useNavigator";
import { LinkProps } from "./Link.types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StackParamList } from "ui/navigator/Stack";

const Link = ({ to, onPress, children }: LinkProps): JSX.Element => {
    const navigator = useNavigator();

    const handlePress = () => {
        onPress?.();
        if (typeof to === "string") navigator.navigate(to as keyof StackParamList);
        else navigator.navigate(to.screen, to.params);
    };

    return <TouchableWithoutFeedback onPress={handlePress}>{children}</TouchableWithoutFeedback>;
};

export default Link;
