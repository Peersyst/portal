import { screen, fireEvent } from "@testing-library/react-native";
import Counter from "ui/counter/components/display/Counter";
import { render } from "../../../utils/test-utils";

describe("Counter", () => {
    test("Render", () => {
        render(<Counter value={0} onIncrement={jest.fn()} />);

        expect(screen.getByRole("button", { name: "Increment counter" })).toBeDefined();
        expect(screen.getByText("Value: 0")).toBeDefined();
    });

    test("Increment counter", async () => {
        const handleIncrement = jest.fn();

        render(<Counter value={0} onIncrement={handleIncrement} />);

        fireEvent.press(screen.getByRole("button", { name: "Increment counter" }));
        expect(handleIncrement).toHaveBeenCalledTimes(1);
    });
});
