import { Button } from "@peersyst/react-components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Common/Input/Button",
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: "filled",
        children: "Button",
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        children: "Button",
    },
};
