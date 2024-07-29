import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CounterParamsList } from "ui/counter/navigator/CounterNavigator";

export type StackParamList = CounterParamsList;

export default createNativeStackNavigator<StackParamList>();
