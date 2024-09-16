export interface TokenSelectorToolbarProps {
    query: string;
    onQueryChange: (query: string) => void;
    isLoading?: boolean;
}
