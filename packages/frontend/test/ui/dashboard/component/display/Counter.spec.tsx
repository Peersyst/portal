import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "ui/dashboard/components/display/Counter";
import { render } from "../../../utils/test-utils";

describe("Counter", () => {
    test("Render", () => {
        render(<Counter value={0} onIncrement={jest.fn()} />);

        expect(screen.getByRole("button", { name: "Increment counter" })).toBeInTheDocument();
        expect(screen.getByText("Value: 0")).toBeInTheDocument();
    });

    test("Increment counter", async () => {
        const user = userEvent.setup();

        const handleIncrement = jest.fn();

        render(<Counter value={0} onIncrement={handleIncrement} />);

        await user.click(screen.getByRole("button", { name: "Increment counter" }));
        expect(handleIncrement).toHaveBeenCalledTimes(1);
    });
});
