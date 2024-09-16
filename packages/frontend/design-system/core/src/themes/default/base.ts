import { BasePalette, GrayShades, BlueShades, GreenShades, OrangeShades, ErrorShades, MagentaShades, PurpleShades } from "../../palette";

const grey: GrayShades = {
    "100": "#F5F5F7",
    "200": "#E0E0E1",
    "400": "#A2A2A4",
    "500": "#7F7F80",
    "600": "#454549",
    "700": "#343437",
    "800": "#232325",
    "900": "#1A1A1A",
    "950": "#111112",
};

const blue: BlueShades = {
    "30": "#80CCFF",
    "40": "#4BB7FF",
    "90": "#002E4C",
};

const green: GreenShades = {
    "30": "#5BEB9D",
    "40": "#84F0B6",
    "100": "#0A2E1B",
};

const magenta: MagentaShades = {
    "90": "#4C0026",
};

const orange: OrangeShades = {
    "20": "#FFCCB2",
    "30": "#FFAA80",
    "90": "#4C1A00",
    "100": "#4D1B00",
};

const purple: PurpleShades = {
    "30": "#B480FF",
    "40": "#9A52FF",
    "50": "#7919FF",
    "70": "#4A00B2",
    "80": "#350080",
    "90": "#20004C",
};

const error: ErrorShades = {
    100: "#FFE6EB",
    200: "#F04275",
};

export const baseDefaultPalette: BasePalette = {
    grey,
    blue,
    green,
    magenta,
    orange,
    purple,
    error,
    primary: purple[50],
    accent: purple[30],
    white: "#FFFFFF",
    black: "#000000",
    placeholder: grey[400],
};
