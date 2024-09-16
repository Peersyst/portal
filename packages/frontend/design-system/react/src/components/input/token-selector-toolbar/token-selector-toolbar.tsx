import { LoaderIcon } from "@peersyst/react-components";
import { TokenSelectorToolbarProps } from "./token-selector-toolbar.types";
import { useTranslate } from "@frontend/locale/react";
import { Searchbar } from "./token-selector-toolbar.styles";

export function TokenSelectorToolbar({ query, onQueryChange, isLoading }: TokenSelectorToolbarProps): JSX.Element {
    const translate = useTranslate();

    return (
        <Searchbar
            label={translate("search")}
            placeholder={translate("searchToken")}
            value={query}
            onChange={onQueryChange}
            suffix={isLoading ? <LoaderIcon /> : undefined}
        />
    );
}
