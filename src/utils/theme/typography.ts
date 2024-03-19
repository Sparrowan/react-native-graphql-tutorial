import { normalizeFont } from "../normalize";
import fonts from "./fonts";

const typography = {
    largeTitle: {
        fontSize: normalizeFont(34),
        fontWeight: "400",
        lineHeight: normalizeFont(41),
    },
    title1: {
        fontSize: normalizeFont(28),
        fontWeight: "400",
        lineHeight: normalizeFont(34),
    },
    title2: {
        fontSize: normalizeFont(22),
        fontWeight: "400",
        lineHeight: normalizeFont(28),
    },
    title3: {
        fontSize: normalizeFont(20),
        fontWeight: "400",
        lineHeight: normalizeFont(23),
    },
    headline: {
        fontSize: normalizeFont(17),
        fontWeight: "400",
        lineHeight: normalizeFont(22),
    },
    body: {
        fontSize: normalizeFont(17),
        fontWeight: "400",
        lineHeight: normalizeFont(22),
    },
    body1: {
        fontSize: normalizeFont(15),
        fontWeight: "400",
        lineHeight: normalizeFont(17),
    },
    body2: {
        fontSize: normalizeFont(13),
        fontWeight: "400",
        lineHeight: normalizeFont(17),
    },
    body3: {
        fontSize: normalizeFont(12),
        fontWeight: "400",
        lineHeight: normalizeFont(14),
    },
    caption: {
        fontSize: normalizeFont(14),
        fontWeight: "300",
        lineHeight: normalizeFont(19),
    },
    caption1: {
        fontSize: normalizeFont(11),
        fontWeight: "300",
        lineHeight: normalizeFont(15),
    },
    caption2: {
        fontSize: normalizeFont(9),
        fontWeight: "300",
        lineHeight: normalizeFont(12),
    },
    caption3: {
        fontSize: normalizeFont(8),
        fontWeight: "300",
        lineHeight: normalizeFont(12),
    },
    button: {
        fontFamily: fonts.gabaritoBold.fontFamily,
        fontSize: normalizeFont(10),
        fontWeight: fonts.gabaritoBold.fontWeight,
        lineHeight: normalizeFont(12),
    },
} as const;

export type TypographyVariants = keyof Typography;
export type TypographyVariant =
    | {
        fontSize?: number;
        fontFamily: string;
        fontWeight: number;
        lineHeight?: number;
    }
    | Record<string, any>;

export type Typography = typeof typography;

export default typography;
