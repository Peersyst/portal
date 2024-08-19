import type { Preview } from "@storybook/react";
import React from "react";
import { ConfigProvider } from "@peersyst/react-components";

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
            <ConfigProvider config={{} as any}>
                <Story />
            </ConfigProvider>
        ),
    ],
};

export default preview;
