import { RouteProp, useRoute as useRouteBase } from "@react-navigation/native";
import { StackParamList } from "../stack.tmp";

export default function useRoute() {
    return useRouteBase<RouteProp<StackParamList>>();
}
