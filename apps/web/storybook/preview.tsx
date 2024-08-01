import "@/common/polyfills";
import "@/domain/setup";

import type { Preview } from "@storybook/react";
import { ToastProvider, ModalProvider } from "@peersyst/react-components";
import { BrowserRouter } from "react-router-dom";
import Providers from "@/ui/Providers";

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
