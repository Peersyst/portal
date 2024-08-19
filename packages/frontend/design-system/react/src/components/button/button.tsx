import { ButtonProps, Button as BaseButton } from "@peersyst/react-components";

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
    return <BaseButton {...props} />;
};
