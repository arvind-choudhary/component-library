import type { Meta, StoryObj } from '@storybook/react';

import { ActionComponent } from '@ui/atoms/_action/ActionComponent';

const INTENT_TYPE_OPTIONS = {
  'primary': 'bg-primary text-white',
  'danger': 'bg-danger text-white',
  'warning': 'bg-warning text-white',
  'info': 'bg-info text-white',
  'success': 'bg-success text-white',
}

const BORDER_TYPE_OPTIONS = {
  'solid': 'border-solid',
  'dashed': 'border-dashed',
  'dotted': 'border-dotted',
  'double': 'border-double',
  'hidden': 'border-hidden'
}

const ROUNDED_TYPE_OPTIONS = {
  'xs': 'rounded',
  'md': 'rounded-md',
  'lg': 'rounded-lg',
  'full': 'rounded-full',
  'none': 'rounded-none',
};

const SHADOW_TYPE_OPTIONS = {
  'xs': 'shadow',
  'sm': 'shadow-sm',
  'md': 'shadow-md',
  'lg': 'shadow-lg',
  'none': 'shadow-none',
};

const ALING_TYPE_OPTIONS = {
  center: 'text-center',
  left: 'text-left',
  right: 'text-right',
  justify: 'text-justify',
  start: 'text-start',
  end: 'text-end'
};


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ActionComponent> = {
  component: ActionComponent,
  args: {
    intent: 'primary',
  },
  argTypes: {
    intent: {
      defaultValue: 'primary',
      options: Object.keys(INTENT_TYPE_OPTIONS),
      control: { type: 'select' }
    },
    hover: {
      defaultValue: false,
      type: 'boolean',
      description: 'if hover is true then according to intent value hover color will apply.'
    },
    border: {
      defaultValue: false,
      type: 'boolean',
      description: 'if hover is true then according to intent value hover color will apply.'
    },
    pressed: {
      defaultValue: false,
      type: 'boolean',
      description: 'if pressed is true then according to intent value pressed color will apply.'
    },
    size: {
      defaultValue: 'sm',
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'inline-radio' },
    },
    rounded: {
      options: Object.keys(ROUNDED_TYPE_OPTIONS),
      control: { type: 'select' },
    },
    shadow: {
      defaultValue: 'false',
      options: Object.keys(SHADOW_TYPE_OPTIONS),
      control: { type: 'select' },
    },
    borderType: {
      defaultValue: 'solid',
      options: Object.keys(BORDER_TYPE_OPTIONS),
      if: { arg: 'border', truthy: true },
      control: { type: 'select' },
    },
    aling: {
      options:  Object.keys(ALING_TYPE_OPTIONS),
      control: { type: 'select'}
    },
    secondaryVariantType: {
      defaultValue: false,
      type: 'boolean',
      description: 'if secondary variant type is true then according to intent value color, hover color will apply.'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionComponent>;

/**    Primary button hover */
export const Primary: Story = {};
export const PrimaryWithHover: Story = {
  args: {
    hover: true
  }
};
export const PrimaryWithPressed: Story = {
  args: {
    pressed: true
  },
};
export const PrimarySizeSmall: Story = {
  args: {
    size: 'sm'
  }
};

export const PrimarySizeMedium: Story = {
  args: {
    size: 'md'
  }
};

export const PrimarySizeLarge: Story = {
  args: {
    size: 'lg'
  }
};

export const PrimarySizeFull: Story = {
  args: {
    size: 'full'
  }
};

export const PrimarySizeFullWithTextLeft: Story = {
  name: 'Text-Alingment-Left',
  args: {
    size: 'full',
    aling: 'left'
  }
};

export const PrimarySizeFullWithTextCenter: Story = {
  name: 'Text-Alingment-Center',
  args: {
    size: 'full',
    aling: 'center'
  }
};

export const PrimarySizeFullWithTextRight: Story = {
  name: 'Text-Alingment-Right',
  args: {
    size: 'full',
    aling: 'right'
  }
};


export const PrimarySizeFullWithTextJustify: Story = {
  name: 'Text-Alingment-Justify',
  args: {
    size: 'full',
    aling: 'justify'
  }
};

export const PrimarySizeFullWithTextStart: Story = {
  name: 'Text-Alingment-Start',
  args: {
    size: 'full',
    aling: 'start'
  }
};

export const PrimarySizeFullWithTextEnd: Story = {
  name: 'Text-Alingment-End',
  args: {
    size: 'full',
    aling: 'end'
  }
};

export const ButtonWithBorderRadius: Story = {
  name: 'Border-Rounded-X-Small',
  args: {
    rounded: 'xs'
  }
};

export const ButtonWithBorderRadiusMD: Story = {
  name: 'Border-Rounded-MD',
  args: {
    rounded: 'md'
  }
};

export const ButtonWithBorderRadiusLg: Story = {
  name: 'Border-Rounded-Large',
  args: {
    rounded: 'lg'
  }
};

export const ButtonWithBorderRadiusFull: Story = {
  name: 'Border-Rounded-Full',
  args: {
    rounded: 'full'
  }
};

export const ButtonWithBorderRadiusNone: Story = {
  name: 'Border-Rounded-None',
  args: {
    rounded: 'none'
  }
};

export const PrimaryWithBorder: Story = {
  args: {
    intent: 'primary',
    shadow: 'xs',
    border: true
  }
};

export const PrimaryWithBorderAndPressed: Story = {
  name: 'Border-with-pressed-and-hover',
  args: {
    intent: 'primary',
    shadow: 'xs',
    border: true,
    pressed: true,
    hover: true,
  }
};


export const PrimaryWithBorderWithSecondary: Story = {
  name: 'primary-secondary',
  args: {
    intent: 'primary',
    shadow: 'xs',
    border: true,
    pressed: true,
    hover: true,
    secondaryVariantType: true
  }
};
export const Danger: Story = {
  name: 'Danger',
  args: {
    intent: 'danger',
    hover: true,
    pressed: true,
    border: true
  }
};

export const DangerWithSecondary: Story = {
  name: 'danger-with-secondary',
  args: {
    intent: 'danger',
    hover: true,
    pressed: true,
    border: true,
    secondaryVariantType: true
  }
};

export const Warning: Story = {
  name: 'warning',
  args: {
    intent: 'warning',
    hover: true,
    pressed: true,
    border: true
  }
};

export const WarningWithSecondary: Story = {
  name: 'warning-with-secondary',
  args: {
    intent: 'warning',
    secondaryVariantType: true,
    hover: true,
    pressed: true,
    border: true
  }
};


export const Info: Story = {
  name: 'info',
  args: {
    intent: 'warning',
    hover: true,
    pressed: true,
    border: true
  }
};

export const InfoWithSecondary: Story = {
  name: 'info-with-secondary',
  args: {
    intent: 'warning',
    secondaryVariantType: true,
    hover: true,
    pressed: true,
    border: true
  }
};


export const Success: Story = {
  name: 'success',
  args: {
    intent: 'success',
    hover: true,
    pressed: true,
    border: true
  }
};

export const SuccessWithSecondary: Story = {
  name: 'success-with-secondary',
  args: {
    intent: 'success',
    secondaryVariantType: true,
    hover: true,
    pressed: true,
    border: true
  }
};
