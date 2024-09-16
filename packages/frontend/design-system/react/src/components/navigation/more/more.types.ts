export type MoreAction = {
    label: string;
    onClick: () => void;
};

export interface MoreProps {
    actions: MoreAction[];
}
