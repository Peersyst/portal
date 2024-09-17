import { SelectProps } from "../select";
import { Chain } from "@frontend/chain";

export type ChainSelectProps = Omit<SelectProps<Chain>, "options" | "children" | "compare"> & {
    chains: Chain[];
};
