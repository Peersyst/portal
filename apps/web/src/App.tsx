// Load polyfills
import "@/core/polyfills";

// Set up data access
import "@/core/data-access/setup";

// Set up domain
import "@/core/domain/setup";

// Load locale
import "@/locale";

import Providers from "@/Providers";
import { useInit } from "@/common/hooks/useInit";
import { Suspense } from "react";
import Router from "./router/Router";

export default function App(): JSX.Element | null {
    const { isLoading } = useInit();

    return isLoading ? (
        <></>
    ) : (
        <Suspense fallback={<></>}>
            <Providers>
                <Router />
            </Providers>
        </Suspense>
    );
}
