import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '@/assets/icons/components/Edit'
import { More } from '@/assets/icons/components/More'
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
    Icon: <More />,
  },
}

export const Small: Story = {
  args: {
    Icon: <Edit />,
    variant: 'small',
  },
}

export const Disabled: Story = {
  args: {
    Icon: <Edit />,
    disabled: true,
  },
}
