import type { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent } from '@ui/atoms/_button/Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};