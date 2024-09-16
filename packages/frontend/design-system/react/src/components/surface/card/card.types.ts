import { ThemeColor } from "../../../themes/common";
import { PaperProps } from "../paper";

export type CardProps = PaperProps & {
    color?: ThemeColor;
};

export type CardRootProps = {
    color: string;
};
