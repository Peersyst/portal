import { Theme } from "@peersyst/react-components";
import { createGlobalStyle } from "styled-components";
import { ChipStyles } from "./components/chip.styles";
import { aStyles } from "./components/a.styles";
import { AlertStyles } from "./components/alert.styles";
import { BlockchainAddressStyles } from "./components/blockchain-address.styles";
import { PopoverStyles } from "./components/popover.styles";
import { DividerStyles } from "./components/divider.styles";
import { ToolbarStyles } from "./components/toolbar.styles";
import { rootStyles } from "./components/root.styles";
import { CarouselStyles } from "./components/carousel.styles";
import { FormControlStyles } from "./components/form-control.styles";
import { LabelStyles } from "./components/label.styles";
import { SelectStyles } from "./components/select.styles";
import { TextInputStyles } from "./components/text-input.styles";
import { SwitchStyles } from "./components/switch.styles";
import { TabsStyles } from "./components/tabs.styles";
import { ExpandableStyles } from "./components/expandable.styles";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            vertical-align: baseline;
            scroll-behavior: smooth;
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
            display: block;
        }

        html {
            color: #121212;
            font-family: "Work Sans", sans-serif;
            font-size: clamp(14px, 1.5vw, 16px);
            overflow-y: scroll;
        }

        * {
            box-sizing: border-box;
            font-family: inherit;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: inherit;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type="number"] {
            -moz-appearance: textfield;
        }

        strong {
            font-weight: 500;
        }

        #root {
            min-height: 100vh;
            display: flex;
      flex-direction: column;
        }

        ${rootStyles};
        ${aStyles};
        ${ChipStyles};
        ${BlockchainAddressStyles};
        ${AlertStyles};
        ${PopoverStyles};
        ${DividerStyles};
        ${ToolbarStyles};
        ${CarouselStyles};
        ${FormControlStyles};
        ${LabelStyles};
        ${SelectStyles};
        ${TextInputStyles};
        ${SwitchStyles};
        ${TabsStyles};
        ${ExpandableStyles};
    `;
