import type { Preview } from "@storybook/react";
import ConfigProvider from "../src/ui/config/ConfigProvider";

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
