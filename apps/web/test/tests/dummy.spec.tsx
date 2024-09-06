import { render, screen } from "../utils";

describe("dummy test", () => {
    test("dummy test", () => {
        render(<p>Hello World</p>);

        expect(screen.getByText("Hello World")).toBeDefined();
    });
});
