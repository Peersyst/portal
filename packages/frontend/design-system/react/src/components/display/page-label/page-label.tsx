import { LabelProps } from "../label";
import { PageLabelRoot } from "./page-label.styles";

export const PageLabel = ({ variant = "caption2Regular", gap = "1.25rem", ...rest }: LabelProps): JSX.Element => (
    <PageLabelRoot variant={variant} gap={gap} {...rest} />
);
