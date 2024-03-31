import { VariantProps } from 'class-variance-authority';
import { IIconSvgProps, IIconStrokeProps, cvaSvgStyles, cvaStrokeStyles } from './Icons';
import { getStylesInfo } from './icon.util';

export const CloseIcon: React.FC<IIconSvgProps & IIconStrokeProps> = ({ 
  intent, strokeWidth, disabled, secondaryVariant = false, hover, ...restProps 

}) => {
  const { svgStyle, srtokeStyle } = getStylesInfo({ intent, strokeWidth, disabled, secondaryVariant, hover });
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={cvaSvgStyles(svgStyle)} {...restProps}>
      <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={cvaStrokeStyles(srtokeStyle)}/>
      <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={cvaStrokeStyles(srtokeStyle)}/>
    </svg>
  );
}
