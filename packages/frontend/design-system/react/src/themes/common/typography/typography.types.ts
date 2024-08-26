import { TypographyVariants } from "@frontend/design-system-core/typography";
import { fonts } from "./fonts";
import { TypographyVariants as BaseTypeographyVariants } from "@peersyst/react-components";

export type OverridingTypographyVariants = TypographyVariants<typeof fonts>;

export type MergedTypographyVariantsOverrides = Record<BaseTypeographyVariants, false> &
    Record<OverridingTypographyVariants, true> & {
        caption: false;
    };
