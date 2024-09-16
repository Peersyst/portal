import { TypographyProps } from "@peersyst/react-components";
import { CSSProperties } from "react";

export type ClockCalloutProps = {
    message: string;
    variant?: TypographyProps["variant"];
    style?: CSSProperties;
    className?: string;
};
