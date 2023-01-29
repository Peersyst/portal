import { Button, Col, Typography } from "@peersyst/react-components";

export interface CounterProps {
    value: number;
    onIncrement: () => void;
}

export default function Counter({ value, onIncrement }: CounterProps): JSX.Element {
    return (
        <Col flex={1} gap="2rem" alignItems="center" css={{ marginTop: "2rem" }}>
            <Button onClick={onIncrement} color="primary">
                Increment counter
            </Button>
            <Typography variant="body1" fontWeight="bold">
                Value: {value}
            </Typography>
        </Col>
    );
}
