import { alpha, darken, lighten } from "@peersyst/react-utils";
import { ButtonPalette } from "../../../common/palette/types/button";
import { baseLightPalette } from "../light/base";
import { baseDarkPalette } from "../dark/base";

export const lightButtonPalette: ButtonPalette = {
    primary: {
        backgroundColor: baseLightPalette.primary,
        color: baseLightPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseLightPalette.primary, 0.4),
            color: lighten(baseLightPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseLightPalette.primary, 0.3),
        },
        hover: { backgroundColor: darken(baseLightPalette.primary, 0.15) },
    },
    secondary: {
        backgroundColor: baseLightPalette.gray.light,
        color: baseLightPalette.gray.black,
        disabled: {
            backgroundColor: alpha(baseLightPalette.gray.light, 0.4),
            color: lighten(baseLightPalette.gray.black, 0.4),
        },
        active: {
            backgroundColor: darken(baseLightPalette.gray.light, 0.3),
        },
        hover: { backgroundColor: darken(baseLightPalette.gray.light, 0.15) },
    },
    tertiary: {
        backgroundColor: baseLightPalette.contrast,
        color: baseLightPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseLightPalette.contrast, 0.4),
            color: lighten(baseLightPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseLightPalette.contrast, 0.3),
        },
        hover: { backgroundColor: darken(baseLightPalette.contrast, 0.15) },
    },
    quaternary: {
        backgroundColor: baseLightPalette.gray.regular,
        color: baseLightPalette.gray.black,
        disabled: {
            backgroundColor: alpha(baseLightPalette.gray.regular, 0.4),
            color: lighten(baseLightPalette.gray.black, 0.4),
        },
        active: {
            backgroundColor: darken(baseLightPalette.gray.regular, 0.3),
        },
        hover: { backgroundColor: darken(baseLightPalette.gray.regular, 0.15) },
    },
    outlined: {
        backgroundColor: "transparent",
        color: baseLightPalette.primary,
        borderColor: baseLightPalette.primary,
        disabled: {
            backgroundColor: "transparent",
            color: lighten(baseLightPalette.primary, 0.4),
            borderColor: lighten(baseLightPalette.primary, 0.4),
        },
        active: {
            color: baseLightPalette.gray.light,
            backgroundColor: alpha(baseLightPalette.primary, 0.4),
            borderColor: baseLightPalette.primary,
        },
        hover: {
            color: baseLightPalette.primary,
            backgroundColor: alpha(baseLightPalette.primary, 0.2),
            borderColor: baseLightPalette.primary,
        },
    },
    text: {
        disabled: {
            color: baseLightPalette.gray.medium,
        },
        active: {
            opacity: 0.7,
        },
        hover: {
            opacity: 0.8,
        },
    },
    ghost: {
        backgroundAlpha: 0.16,
        disabled: {
            color: baseDarkPalette.gray.medium,
            backgroundAlpha: 0.16,
        },
        active: { backgroundAlpha: 0.4 },
        hover: { backgroundAlpha: 0.2 },
    },
    destructive: {
        backgroundColor: baseLightPalette.status.error,
        color: baseLightPalette.gray.light,
        disabled: {
            backgroundColor: darken(baseLightPalette.status.error, 0.2),
            color: lighten(baseLightPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseLightPalette.status.error, 0.3),
        },
        hover: { backgroundColor: darken(baseLightPalette.status.error, 0.15) },
    },
};

export const darkButtonPalette: ButtonPalette = {
    primary: {
        backgroundColor: baseDarkPalette.primary,
        color: baseDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDarkPalette.primary, 0.4),
            color: darken(baseDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDarkPalette.primary, 0.3),
        },
        hover: { backgroundColor: darken(baseDarkPalette.primary, 0.15) },
    },
    secondary: {
        backgroundColor: baseDarkPalette.gray.almostBlack,
        color: baseDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDarkPalette.gray.almostBlack, 0.4),
            color: darken(baseDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDarkPalette.gray.almostBlack, 0.3),
        },
        hover: { backgroundColor: darken(baseDarkPalette.gray.almostBlack, 0.15) },
    },
    tertiary: {
        backgroundColor: baseDarkPalette.contrast,
        color: baseDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDarkPalette.contrast, 0.4),
            color: darken(baseDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDarkPalette.contrast, 0.3),
        },
        hover: { backgroundColor: darken(baseDarkPalette.contrast, 0.15) },
    },
    quaternary: {
        backgroundColor: baseDarkPalette.gray.almostBlack,
        color: baseDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDarkPalette.gray.almostBlack, 0.4),
            color: darken(baseDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDarkPalette.gray.almostBlack, 0.3),
        },
        hover: { backgroundColor: darken(baseDarkPalette.gray.almostBlack, 0.15) },
    },
    outlined: {
        backgroundColor: "transparent",
        color: baseDarkPalette.primary,
        borderColor: baseDarkPalette.primary,
        disabled: {
            backgroundColor: "transparent",
            color: darken(baseDarkPalette.primary, 0.4),
            borderColor: darken(baseDarkPalette.primary, 0.4),
        },
        active: {
            color: baseDarkPalette.gray.light,
            backgroundColor: alpha(baseDarkPalette.primary, 0.4),
            borderColor: baseDarkPalette.primary,
        },
        hover: {
            color: baseDarkPalette.gray.light,
            backgroundColor: alpha(baseDarkPalette.primary, 0.2),
            borderColor: baseDarkPalette.primary,
        },
    },
    text: {
        disabled: {
            color: baseDarkPalette.gray.medium,
        },
        active: {
            opacity: 0.7,
        },
        hover: {
            opacity: 0.8,
        },
    },
    ghost: {
        backgroundAlpha: 0.16,
        disabled: {
            color: baseDarkPalette.gray.medium,
            backgroundAlpha: 0.16,
        },
        active: { backgroundAlpha: 0.4 },
        hover: { backgroundAlpha: 0.2 },
    },
    destructive: {
        backgroundColor: baseDarkPalette.red.scarlet,
        color: baseDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDarkPalette.red.scarlet, 0.4),
            color: darken(baseDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDarkPalette.red.scarlet, 0.3),
        },
        hover: { backgroundColor: darken(baseDarkPalette.red.scarlet, 0.15) },
    },
};
