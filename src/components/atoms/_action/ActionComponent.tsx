import React from 'react';
import { cn } from '@utils/clxsUtil';

import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';

const cvaStyles = cva('text-center box-border inline-block', {
  variants: {
    intent: {
      primary: 'bg-primary text-white',
      danger: 'bg-danger text-white',
      warning: 'bg-warning text-white',
      info: 'bg-info text-white',
      success: 'bg-success text-white',
    },
    size: {
      'sm': 'py-2 px-4',
      'md': 'py-2 px-6',
      'lg': 'py-2 px-8',
      'full': 'py-2 px-4 w-full'
    },
    pressed: {
      primary: 'active:bg-primary-pressed',
      danger: 'active:bg-danger-pressed',
      warning: 'active:bg-warning-pressed',
      info: 'active:bg-info-pressed',
      success: 'active:bg-success-pressed'
    },
    outlined: {
      primary: 'border border-2 border-primary-border',
      danger: 'border border-2 border-danger-border',
      warning: 'border border-2 border-warning-border',
      info: 'border border-2 border-info-border',
      success: 'border border-2 border-success-border'
    },
    hover: {
      primary: 'hover:bg-primary-hover',
      danger: 'hover:bg-danger-hover',
      warning: 'hover:bg-warning-hover',
      info: 'hover:bg-info-hover',
      success: 'hover:bg-success-hover'
    },
    borderType: {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
      double: 'border-double',
      hidden: 'border-hidden'
    },
    rounded: {
      'xs': 'rounded',
      'md': 'rounded-md',
      'lg': 'rounded-lg',
      'full': 'rounded-full',
      'none': 'rounded-none',
    },
    shadow: {
      'xs': 'shadow',
      'sm': 'shadow-sm',
      'md': 'shadow-md',
      'lg': 'shadow-lg',
      'none': 'shadow-none',
    },
    aling: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
      justify: 'text-justify',
      start: 'text-start',
      end: 'text-end'
    }
  },
  compoundVariants: [
    { intent: 'primary', pressed: 'primary', hover: 'primary', outlined: 'primary' },
    { intent: 'danger', pressed: 'danger', hover: 'danger', outlined: 'danger' },
    { intent: 'warning', pressed: 'warning', hover: 'warning', outlined: 'warning' },
    { intent: 'info', pressed: 'info', hover: 'info', outlined: 'info' },
    { intent: 'success', pressed: 'success', hover: 'success', outlined: 'success' }
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'sm'
  }
});

const cvaSecondaryStyles = cva(null, {
  variants: {
    secondaryIntentType: {
      primary: 'bg-primary-secondary text-primary',
      danger: 'bg-danger-secondary text-danger',
      warning: 'bg-warning-secondary text-warning',
      info: 'bg-info-secondary text-info',
      success: 'bg-success-secondary text-success'
    },
    secondaryColorHover: {
      primary: 'hover:bg-primary hover:text-white',
      danger: 'hover:bg-danger hover:text-white',
      warning: 'hover:bg-warning hover:text-white',
      info: 'hover:bg-info hover:text-white',
      success: 'hover:bg-success hover:text-white'
    },
    secondaryOutlined: {
      primary: 'border border-2 border-primary-border',
      danger: 'border border-2 border-danger-border',
      warning: 'border border-2 border-warning-border',
      info: 'border border-2 border-info-border',
      success: 'border border-2 border-success-border'
    }
  }
});

type PICK_PROPS_FROM_CVA = 'borderType' | 'intent' | 'size' | 'rounded' | 'shadow' | 'aling';

export interface IAppProps extends React.HTMLAttributes<HTMLButtonElement>, Pick<VariantProps<typeof cvaStyles>, PICK_PROPS_FROM_CVA>  {
  as?: 'span' | 'a' | 'button',
  text?: string,
  hover?: boolean,
  pressed?: boolean,
  border?: boolean,
  secondaryVariantType?: boolean;
}

export function ActionComponent ({ 
  as = 'button', 
  children, 
  text = 'Button', 
  className, 
  intent = 'primary', 
  hover, 
  pressed, 
  border = false, 
  size, 
  shadow = 'none', 
  rounded = 'none', 
  borderType = 'solid', 
  aling, 
  secondaryVariantType,
  ...restProps
}: IAppProps) {
  // return <span className='shadow-lg'>dsffds</span>
  return React.createElement(as, {
    ...restProps,
    className: cn(cx(cvaStyles({ 
      intent,
      size,
      rounded,
      shadow,
      aling,
      hover: hover ? intent : null, 
      pressed: pressed ? intent : null,
      outlined: border ? intent : null,
      borderType: border ? borderType : null,
    }), cvaSecondaryStyles({ 
      secondaryIntentType: secondaryVariantType ? intent : null, 
      secondaryColorHover: secondaryVariantType && hover ? intent : null,
      secondaryOutlined: secondaryVariantType && border ? intent : null
    })), className)
  }, children ?? text);
}
