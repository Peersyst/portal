import * as React from "react";
import { ViewStyle } from "react-native";
import { To } from "../../navigator.types";

export interface LinkProps {
    to: To<ReactNavigation.RootParamList>;
    onPress?: () => void;
    children: React.ReactNode;
    style?: ViewStyle;
}
