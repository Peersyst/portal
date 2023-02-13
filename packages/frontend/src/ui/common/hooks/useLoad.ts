import { useEffect, useState } from "react";
import ControllerFactory from "../../adapter/ControllerFactory";

export function useLoad(): boolean {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            await ControllerFactory.counterController.loadCount();
            setLoading(false);
        })();
    }, []);

    return loading;
}
