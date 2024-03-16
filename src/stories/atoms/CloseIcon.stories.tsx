import type { Meta, StoryObj } from '@storybook/react';

import { CloseIcon } from '@ui/atoms/_icons/CloseIcon';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CloseIcon> = {
  component: CloseIcon,
};

export default meta;
type Story = StoryObj<typeof CloseIcon>;

/**    Primary button hover */
export const Close: Story = {};
