import { alpha, darken, lighten } from "@peersyst/react-utils";
import { ButtonPalette } from "../../../common/palette/types/button";
import { baseDefaultLightPalette, baseDefaultDarkPalette } from "@frontend/design-system-core/themes/default";

export const lightButtonPalette: ButtonPalette = {
    primary: {
        backgroundColor: baseDefaultLightPalette.primary,
        color: baseDefaultLightPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDefaultLightPalette.primary, 0.4),
            color: lighten(baseDefaultLightPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultLightPalette.primary, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultLightPalette.primary, 0.15) },
    },
    secondary: {
        backgroundColor: baseDefaultLightPalette.gray.light,
        color: baseDefaultLightPalette.gray.black,
        disabled: {
            backgroundColor: alpha(baseDefaultLightPalette.gray.light, 0.4),
            color: lighten(baseDefaultLightPalette.gray.black, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultLightPalette.gray.light, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultLightPalette.gray.light, 0.15) },
    },
    tertiary: {
        backgroundColor: baseDefaultLightPalette.contrast,
        color: baseDefaultLightPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDefaultLightPalette.contrast, 0.4),
            color: lighten(baseDefaultLightPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultLightPalette.contrast, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultLightPalette.contrast, 0.15) },
    },
    quaternary: {
        backgroundColor: baseDefaultLightPalette.gray.regular,
        color: baseDefaultLightPalette.gray.black,
        disabled: {
            backgroundColor: alpha(baseDefaultLightPalette.gray.regular, 0.4),
            color: lighten(baseDefaultLightPalette.gray.black, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultLightPalette.gray.regular, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultLightPalette.gray.regular, 0.15) },
    },
    outlined: {
        backgroundColor: "transparent",
        color: baseDefaultLightPalette.primary,
        borderColor: baseDefaultLightPalette.primary,
        disabled: {
            backgroundColor: "transparent",
            color: lighten(baseDefaultLightPalette.primary, 0.4),
            borderColor: lighten(baseDefaultLightPalette.primary, 0.4),
        },
        active: {
            color: baseDefaultLightPalette.gray.light,
            backgroundColor: alpha(baseDefaultLightPalette.primary, 0.4),
            borderColor: baseDefaultLightPalette.primary,
        },
        hover: {
            color: baseDefaultLightPalette.primary,
            backgroundColor: alpha(baseDefaultLightPalette.primary, 0.2),
            borderColor: baseDefaultLightPalette.primary,
        },
    },
    text: {
        disabled: {
            color: baseDefaultLightPalette.gray.medium,
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
            color: baseDefaultDarkPalette.gray.medium,
            backgroundAlpha: 0.16,
        },
        active: { backgroundAlpha: 0.4 },
        hover: { backgroundAlpha: 0.2 },
    },
    destructive: {
        backgroundColor: baseDefaultLightPalette.status.error,
        color: baseDefaultLightPalette.gray.light,
        disabled: {
            backgroundColor: darken(baseDefaultLightPalette.status.error, 0.2),
            color: lighten(baseDefaultLightPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultLightPalette.status.error, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultLightPalette.status.error, 0.15) },
    },
};

export const darkButtonPalette: ButtonPalette = {
    primary: {
        backgroundColor: baseDefaultDarkPalette.primary,
        color: baseDefaultDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDefaultDarkPalette.primary, 0.4),
            color: darken(baseDefaultDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultDarkPalette.primary, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultDarkPalette.primary, 0.15) },
    },
    secondary: {
        backgroundColor: baseDefaultDarkPalette.gray.almostBlack,
        color: baseDefaultDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDefaultDarkPalette.gray.almostBlack, 0.4),
            color: darken(baseDefaultDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultDarkPalette.gray.almostBlack, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultDarkPalette.gray.almostBlack, 0.15) },
    },
    tertiary: {
        backgroundColor: baseDefaultDarkPalette.contrast,
        color: baseDefaultDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDefaultDarkPalette.contrast, 0.4),
            color: darken(baseDefaultDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultDarkPalette.contrast, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultDarkPalette.contrast, 0.15) },
    },
    quaternary: {
        backgroundColor: baseDefaultDarkPalette.gray.almostBlack,
        color: baseDefaultDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDefaultDarkPalette.gray.almostBlack, 0.4),
            color: darken(baseDefaultDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultDarkPalette.gray.almostBlack, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultDarkPalette.gray.almostBlack, 0.15) },
    },
    outlined: {
        backgroundColor: "transparent",
        color: baseDefaultDarkPalette.primary,
        borderColor: baseDefaultDarkPalette.primary,
        disabled: {
            backgroundColor: "transparent",
            color: darken(baseDefaultDarkPalette.primary, 0.4),
            borderColor: darken(baseDefaultDarkPalette.primary, 0.4),
        },
        active: {
            color: baseDefaultDarkPalette.gray.light,
            backgroundColor: alpha(baseDefaultDarkPalette.primary, 0.4),
            borderColor: baseDefaultDarkPalette.primary,
        },
        hover: {
            color: baseDefaultDarkPalette.gray.light,
            backgroundColor: alpha(baseDefaultDarkPalette.primary, 0.2),
            borderColor: baseDefaultDarkPalette.primary,
        },
    },
    text: {
        disabled: {
            color: baseDefaultDarkPalette.gray.medium,
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
            color: baseDefaultDarkPalette.gray.medium,
            backgroundAlpha: 0.16,
        },
        active: { backgroundAlpha: 0.4 },
        hover: { backgroundAlpha: 0.2 },
    },
    destructive: {
        backgroundColor: baseDefaultDarkPalette.red.scarlet,
        color: baseDefaultDarkPalette.gray.light,
        disabled: {
            backgroundColor: alpha(baseDefaultDarkPalette.red.scarlet, 0.4),
            color: darken(baseDefaultDarkPalette.gray.light, 0.4),
        },
        active: {
            backgroundColor: darken(baseDefaultDarkPalette.red.scarlet, 0.3),
        },
        hover: { backgroundColor: darken(baseDefaultDarkPalette.red.scarlet, 0.15) },
    },
};
