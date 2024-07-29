import { useEffect, useState } from "react";
import ControllerFactory from "../../adapter/ControllerFactory";
import { i18nextInitializationPromise } from "ui/locale";

export function useLoad(): boolean {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const loadCountPromise = ControllerFactory.counterController.loadCount();

            await Promise.all([loadCountPromise, i18nextInitializationPromise]);

            setLoading(false);
        })();
    }, []);

    return loading;
}
