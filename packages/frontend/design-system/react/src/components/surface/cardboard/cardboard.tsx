import { forwardRef } from "react";
import { PaperProps } from "../paper";
import { CardboardRoot } from "./cardboard.styles";

export const Cardboard = forwardRef(function Clipboard({ elevation = 8, ...rest }: PaperProps, ref): JSX.Element {
    return <CardboardRoot ref={ref} elevation={elevation} {...rest} />;
});
