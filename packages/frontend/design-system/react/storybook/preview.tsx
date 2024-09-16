import "../src/styles/fonts.css";

import type { Preview } from "@storybook/react";
import { DSProvider } from "../src/core";
import { ToastProvider } from "../src/components/feedback/toast";
import { ModalProvider } from "../src/components/feedback/modal";

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
                <ToastProvider>
                    <ModalProvider>
                        <Story />
                    </ModalProvider>
                </ToastProvider>
            </DSProvider>
        ),
    ],
};

export default preview;
