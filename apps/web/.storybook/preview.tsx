import "../src/common/polyfills";
import "../src/domain/setup";

import type { Preview } from "@storybook/react";
import { ToastProvider, ModalProvider } from "@peersyst/react-components";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Providers from "../src/ui/Providers";

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
            <BrowserRouter>
                <Providers>
                    <ToastProvider>
                        <ModalProvider>
                            <Story />
                        </ModalProvider>
                    </ToastProvider>
                </Providers>
            </BrowserRouter>
        ),
    ],
};

export default preview;
