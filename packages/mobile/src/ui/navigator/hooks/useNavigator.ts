import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../Stack";

/**
 * A hook to access the navigation prop of the Navigator.
 *
 * Each navigator will implement its own useNavigator hook.
 *
 * For example, the Navigator (main native stack navigator of the app) implements
 * a useNavigator with the corresponding types. Meanwhile, a nested Drawer navigator
 * would implement a useDrawerNavigator
 */
export default function useNavigator() {
    return useNavigation<NativeStackNavigationProp<StackParamList>>();
}
