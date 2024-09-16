import clsx from "clsx";
import { useEffect } from "react";
import { BridgeTokenSelectorProps } from "./bridge-token-selector.types";
import { useControlled, useDebounce } from "@peersyst/react-hooks";
import { BridgeTokenSelectorList, BridgeTokenSelectorRoot } from "./bridge-token-selector.styles";
import { TokenSelectorToolbar } from "@frontend/design-system-react/token-selector-toolbar";
import { useTheme } from "@frontend/design-system-react/theme";
import { Col } from "@frontend/design-system-react/col";
import { Divider } from "@frontend/design-system-react/divider";

export function BridgeTokenSelector({
    tokens,
    isLoading,
    onSelect,
    defaultQuery = "",
    onQueryChange: onQueryChangeProp,
    query: queryProp,
    isFiltering,
    nothingToShow,
    className,
    style,
    onTokensFiltered,
    renderItem,
}: BridgeTokenSelectorProps): JSX.Element {
    const { spacing } = useTheme();
    const [query, setQuery] = useControlled(defaultQuery, queryProp, onQueryChangeProp);
    const {
        value,
        handleChange,
        debouncedValue: debouncedQuery,
        debouncing: debouncingQuery,
    } = useDebounce(query, { onChange: setQuery, delay: 500 });
    // TODO: Implement tokens filtering
    //const { data: filteredTokens = [], isLoading: isFilterTokensLoading } = useFilterTokens(tokens, debouncedQuery);

    const filteredTokens = tokens;
    const isFilterTokensLoading = false;

    useEffect(() => {
        onTokensFiltered?.(filteredTokens, debouncedQuery);
    }, [filteredTokens]);

    const tokenSelectorLoading = isFilterTokensLoading || isFiltering || debouncingQuery;

    return (
        <BridgeTokenSelectorRoot gap={spacing[8]} className={clsx("BridgeTokenSelector", className)} style={style}>
            <TokenSelectorToolbar query={value} onQueryChange={handleChange} isLoading={tokenSelectorLoading} />
            <Col flex={1} css={{ overflow: "hidden" }} gap={"1px" /* Avoids the divider of being hidden when scrolling */}>
                <Divider />
                <BridgeTokenSelectorList
                    tokens={filteredTokens}
                    isLoading={isLoading}
                    onSelect={onSelect}
                    renderItem={renderItem}
                    nothingToShow={nothingToShow}
                    gap={5}
                />
            </Col>
        </BridgeTokenSelectorRoot>
    );
}
