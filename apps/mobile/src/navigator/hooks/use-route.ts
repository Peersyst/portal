import { RouteProp, useRoute as useRouteBase } from "@react-navigation/native";
import { StackParamList } from "../stack";

export default function useRoute() {
    return useRouteBase<RouteProp<StackParamList>>();
}
