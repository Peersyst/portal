import { useEffect, useState } from "react";
import ControllerFactory from "../../adapter/controller.factory";

export function useLoad(): boolean {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // OTHER STUFF
        ControllerFactory.getCounterController().loadCount();

        setLoading(false);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading;
}
