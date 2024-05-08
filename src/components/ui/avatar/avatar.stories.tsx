import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/ui/avatar/avatar'

const meta = {
  argTypes: {},
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/UI/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WidthSize: Story = {
  args: {
    size: 50,
  },
}

export const WidthImageAndSize: Story = {
  args: {
    size: 50,
    src: 'https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled',
  },
}
