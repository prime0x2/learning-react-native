import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

export const BASE = {
    fontSize: 16,
    color: colors.white,
    fontFamily: typography.primary,
}

export const BASE_BOLD = {
    fontSize: 16,
    color: colors.white,
    fontFamily: typography.primaryBold,
}

export const BOLD = {
    fontSize: 16,
    color: colors.white,
    fontFamily: typography.secondary,
}


export const presets = {
    base: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 20,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 14,
    },
    small: {
        ...BASE,
        fontSize: 12,
    }
}