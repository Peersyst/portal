import { TextFieldProps } from "@frontend/design-system-react/text-field";

export type BridgeDestinationAmountFieldProps = Omit<TextFieldProps, "suffix" | "type" | "format" | "parse" | "hint" | "readonly">;
