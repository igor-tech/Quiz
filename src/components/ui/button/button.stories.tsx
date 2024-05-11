import type { Meta, StoryObj } from '@storybook/react'

import { Logout } from '@/assets/icons/components/logout'

import { Button } from './button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button primary',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    disabled: false,
    variant: 'secondary',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    children: 'Button primary',
    disabled: true,
    variant: 'primary',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Button Secondary',
    disabled: true,
    variant: 'secondary',
  },
}

export const Link: Story = {
  args: {
    as: 'a',
    children: 'Sign Up',
    disabled: false,
    href: 'https://www.google.com/',
    target: '_blank',
    variant: 'link',
  },
}

export const WidthIcon: Story = {
  args: {
    children: (
      <>
        <Logout /> Log out
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
