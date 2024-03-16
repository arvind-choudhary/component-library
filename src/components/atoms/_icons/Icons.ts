import { cva } from "class-variance-authority";
import type { VariantProps } from 'class-variance-authority';

export const cvaSvgStyles = cva('', {
  variants: {
    fill: {
      primary: 'fill-white',
      danger: 'fill-white',
      warning: 'fill-white',
      info: 'fill-white',
      success: 'fill-white',
    }
  }
})

export const cvaStrokeStyles = cva('', {
  variants: {
    strokeColor: {
      primary: 'stroke-white',
      danger: 'stroke-white',
      warning: 'stroke-white',
      info: 'stroke-white',
      success: 'stroke-white',
    },
    secondaryIntentType: {
      primary: 'stroke-primary-secondary stroke-primary group',
      danger: 'stroke-danger-secondary stroke-danger group',
      warning: 'stroke-warning-secondary stroke-warning group',
      info: 'stroke-info-secondary stroke-info group',
      success: 'stroke-success-secondary stroke-success group'
    },
    secondaryColorHover: {
      primary: 'group-hover:stroke-white',
      danger: 'group-hover:stroke-white',
      warning: 'group-hover:stroke-white',
      info: 'group-hover:stroke-white',
      success: 'group-hover:stroke-white'
    },
    strokeWidth: {
      1: 'stroke-1',
      2: 'stroke-2'
    },
  },
  defaultVariants: {
    strokeWidth: 1
  }
})

export interface IIconProps extends React.HTMLProps<'svg'>, Pick<VariantProps<typeof cvaStrokeStyles>, 'strokeWidth'> {
    intent?: 'primary' | 'danger' | 'warning' | 'info' | 'success' | null;
    width?: number;
    height?: number;
    secondaryVariant?: boolean;
    hover?: boolean;
}
