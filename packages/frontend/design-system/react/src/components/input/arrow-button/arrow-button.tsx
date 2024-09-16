import { IconButtonProps } from "@peersyst/react-components";
import { ArrowButtonRoot } from "./arrow-button.styles";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons";

export interface ArrowButtonProps extends Omit<IconButtonProps, "children" | "size"> {
    direction: "left" | "right";
}
export const ArrowButton = ({ direction, ...rest }: ArrowButtonProps): JSX.Element => (
    <ArrowButtonRoot {...rest}>{direction === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</ArrowButtonRoot>
);
