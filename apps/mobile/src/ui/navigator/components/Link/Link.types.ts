import { To } from "ui/navigator/navigator.types";
import { StackParamList } from "../../Stack";
import * as React from "react";

export interface LinkProps {
    to: To<StackParamList>;
    onPress?: () => void;
    children: React.ReactNode;
}
