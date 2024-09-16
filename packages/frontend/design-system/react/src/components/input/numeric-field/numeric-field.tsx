import { useNumericInput } from "@peersyst/react-components";
import { NumericFieldProps } from "./numeric-field.types";
import { TextField } from "../text-field";

export const NumericField = ({ maxDecimals, ...props }: NumericFieldProps) => {
    const { format, parse } = useNumericInput({ maxDecimals });

    return <TextField format={format} parse={parse} {...props} type="number" />;
};
