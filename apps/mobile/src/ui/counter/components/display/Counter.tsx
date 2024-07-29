import { Button, Col, Typography } from "@peersyst/react-native-components";
import { CounterProps } from "./Counter.types";

export default function Counter({ value, onIncrement }: CounterProps): JSX.Element {
    return (
        <Col flex={1} gap={32} alignItems="center" justifyContent="center">
            <Button onPress={onIncrement} color="primary" style={{ alignSelf: "center" }}>
                Increment counter
            </Button>
            <Typography variant="body1" fontWeight="bold">
                Value: {value}
            </Typography>
        </Col>
    );
}
