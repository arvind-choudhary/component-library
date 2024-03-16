import { Meta, StoryObj } from "@storybook/react";
import { CloseBtn as CloseBtnComponent } from '@ui/molecules/_buttons/CloseIcon'

const meta: Meta<typeof CloseBtnComponent> = {
    component: CloseBtnComponent,
    argTypes: {
        intent: {
            defaultValue: 'primary',
            control: { type: 'select' },
            options: ['primary', 'danger', 'info', 'success', 'warning']
        },
        secondaryVariantType: {
            defaultValue: false,
            type: 'boolean'
        },
        hover: {
            defaultValue: false,
            type: 'boolean'
        },
    }
};

export default meta;
type CloseBtnStory = StoryObj<typeof CloseBtnComponent>

export const CloseBtnPrimary = {
    args: {
        intent: 'primary'
    }
} satisfies CloseBtnStory;

export const CloseBtnDanger = {
    args: {
        intent: 'danger'
    }
} satisfies CloseBtnStory;

export const CloseBtnInfo = {
    args: {
        intent: 'info'
    }
} satisfies CloseBtnStory;

export const CloseBtnWarning = {
    args: {
        intent: 'warning'
    }
} satisfies CloseBtnStory;

export const CloseBtnSuccess = {
    args: {
        intent: 'success'
    }
} satisfies CloseBtnStory;