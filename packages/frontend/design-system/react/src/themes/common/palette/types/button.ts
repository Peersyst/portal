type ButtonPaletteVariant = {
    backgroundColor: string;
    color: string;
    borderColor?: string;
    disabled: { backgroundColor: string; color: string; borderColor?: string };
    active: { backgroundColor: string; color?: string; borderColor?: string };
    hover: { backgroundColor: string; color?: string; borderColor?: string };
};

type GhostButtonPaletteVariant = {
    backgroundAlpha: number;
    disabled: { color: string; backgroundAlpha: number };
    active: { backgroundAlpha: number };
    hover: { backgroundAlpha: number };
};

type TextButtonPaletteVariant = {
    disabled: { color: string };
    active: { opacity: number };
    hover: { opacity: number };
};

export type ButtonPalette = {
    primary: ButtonPaletteVariant;
    secondary: ButtonPaletteVariant;
    tertiary: ButtonPaletteVariant;
    quaternary: ButtonPaletteVariant;
    outlined: ButtonPaletteVariant;
    text: TextButtonPaletteVariant;
    ghost: GhostButtonPaletteVariant;
    destructive: ButtonPaletteVariant;
};
