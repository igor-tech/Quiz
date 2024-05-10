import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '@/assets/icons/components/edit'
import { More } from '@/assets/icons/components/more'
import { IconButton } from '@/components/ui/icon-button/icon-button'

const meta = {
  component: IconButton,
  tags: ['autodocs'],
  title: 'Components/UI/Icon Button',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <More />,
  },
}

export const Small: Story = {
  args: {
    children: <Edit />,
    variant: 'small',
  },
}

export const Disabled: Story = {
  args: {
    children: <Edit />,
    disabled: true,
  },
}
