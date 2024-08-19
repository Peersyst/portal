import type { Preview } from "@storybook/react";
import React from "react";
import { ConfigProvider } from "../src/config";

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
            <ConfigProvider>
                <Story />
            </ConfigProvider>
        ),
    ],
};

export default preview;
