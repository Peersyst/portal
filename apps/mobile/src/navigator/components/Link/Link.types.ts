import { To } from "@/navigator/navigator.types";
import * as React from "react";
import { ViewStyle } from "react-native";

export interface LinkProps {
    to: To<ReactNavigation.RootParamList>;
    onPress?: () => void;
    children: React.ReactNode;
    style?: ViewStyle;
}
