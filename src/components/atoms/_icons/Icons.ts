import { cva } from "class-variance-authority";
import type { VariantProps } from 'class-variance-authority';
import { ComponentProps } from "react";

export const cvaSvgStyles = cva('fill-black', {
  variants: {
    fill: {
      primary: 'fill-white',
      danger: 'fill-white',
      warning: 'fill-white',
      info: 'fill-white',
      success: 'fill-white',
    },
    disabled: {
      true: 'fill-gray-50'
    }
  },
})

export const cvaStrokeStyles = cva('fill-black', {
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
    disabled: {
      true: 'fill-gray-50'
    }
  },
  defaultVariants: {
    strokeWidth: 1
  }
})


export interface IIconSvgProps extends ComponentProps<'svg'> {
  intent?: 'primary' | 'danger' | 'warning' | 'info' | 'success' | null;
  width?: number;
  height?: number;
  secondaryVariant?: boolean;
  hover?: boolean;
  disabled?: boolean;
}

export interface IIconStrokeProps extends IIconSvgProps {
  strokeWidth?: 1 | 2; 
}
