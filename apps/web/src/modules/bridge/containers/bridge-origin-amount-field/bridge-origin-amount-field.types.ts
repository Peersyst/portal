import { TextFieldProps } from "@frontend/design-system-react/text-field";

export type BridgeOriginAmountFieldProps = Omit<TextFieldProps, "suffix" | "type" | "format" | "parse" | "hint">;
