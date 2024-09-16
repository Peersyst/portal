import clsx from "clsx";
import { FormGroupProps } from "./form-group.types";
import { Col } from "../col";
import { Typography } from "../../display/typography";

export const FormGroup = ({ children, label, className, style }: FormGroupProps): JSX.Element => (
    <Col gap={20} flex={1} className={clsx("FormGroup", className)} style={style}>
        <Typography variant="headingSemibold" color="grey.400">
            {label}
        </Typography>
        {children}
    </Col>
);
