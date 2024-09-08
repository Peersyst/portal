import { ButtonProps, Button as BaseButton } from "@peersyst/react-components";

export function Button(props: ButtonProps): JSX.Element {
    return <BaseButton {...props} />;
}
