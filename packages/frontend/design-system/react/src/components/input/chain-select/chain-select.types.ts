import { ChainDto } from "@shared/api";
import { SelectProps } from "../select";

export type ChainSelectProps = Omit<SelectProps<ChainDto>, "options" | "children" | "compare"> & {
    chains: ChainDto[];
};
