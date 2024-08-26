import type { Preview } from "@storybook/react";
import { DSProvider } from "../src/core";
import "../src/styles/fonts.css"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <DSProvider projectName="design-system">
                <Story />
            </DSProvider>
        ),
    ],
};

export default preview;
