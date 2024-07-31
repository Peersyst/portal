// Load polyfills
import "@/common/polyfills";

// Load OpenApi config
import "@/data-access/api/OpenApiConfig";

// Set up domain
import "@/domain/setup";

// Load locale
import "@/ui/locale";

import Providers from "@/ui/Providers";
import { useInit } from "@/ui/common/hooks/useInit";
import { Suspense } from "react";
import Router from "@/ui/router/Router";

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
