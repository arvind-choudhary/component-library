import { VariantProps } from "class-variance-authority";
import { cvaStrokeStyles, cvaSvgStyles, IIconStrokeProps, IIconSvgProps } from "./Icons";

type PROPS = IIconStrokeProps & IIconSvgProps;

export const getStylesInfo = ({ intent, disabled, strokeWidth, secondaryVariant, hover }: PROPS): {
    svgStyle: VariantProps<typeof cvaSvgStyles>,
    srtokeStyle: VariantProps<typeof cvaStrokeStyles>,
} => {
    const svgStyle: VariantProps<typeof cvaSvgStyles> = { fill: intent, disabled };
    const srtokeStyle: VariantProps<typeof cvaStrokeStyles> = { 
        strokeWidth,
        strokeColor: secondaryVariant && intent ? intent : null,
        secondaryIntentType: secondaryVariant && intent ? intent : null,
        secondaryColorHover: secondaryVariant && hover ? intent : null,
        disabled
    };
    return { svgStyle, srtokeStyle }
}