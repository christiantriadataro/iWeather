import {Label as ShadCNLabel} from "@/components/ui/label"
import {LabelProps} from "@/types/components.types.ts";
import typographyReducer from "@/reducers/typography.ts";


const Label = ({children, typography}: LabelProps) => {
    const finalClass = typographyReducer(typography)
    return (
        <ShadCNLabel className={finalClass}>{children}</ShadCNLabel>
    )
}

export default Label