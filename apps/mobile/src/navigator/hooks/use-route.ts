import { RouteProp, useRoute as useRouteBase } from "@react-navigation/native";
import { StackParamList } from "../stack";

/**
 * Hook that returns the route prop of the Navigator.
 * @returns The route prop.
 */
export default function useRoute(): RouteProp<StackParamList> {
    return useRouteBase<RouteProp<StackParamList>>();
}
