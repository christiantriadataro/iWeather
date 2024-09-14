import {TypographyScheme} from "@/data/typography.scheme.ts";

const typographyReducer = (action: string | undefined) => {
    switch (action) {
        case "heading-hg":
            return TypographyScheme[0].className
        case "heading-lg":
            return TypographyScheme[1].className
        case "heading-md":
            return TypographyScheme[2].className
        case "heading-sm":
            return TypographyScheme[3].className
        case "heading-xs":
            return TypographyScheme[4].className
        case "text-lg":
            return TypographyScheme[5].className
        case "text-md":
            return TypographyScheme[6].className
        case "text-sm":
            return TypographyScheme[7].className
        case "text-xs":
            return TypographyScheme[8].className
        default:
            return ""
    }
}

export default typographyReducer