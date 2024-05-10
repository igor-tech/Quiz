import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouterDecorator } from '@/app/providers/decorators/browser-router-decorator'
import { Header } from '@/components/header/header'

const meta = {
  argTypes: {},
  component: Header,
  decorators: [BrowserRouterDecorator],
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authorized: Story = {
  args: {
    isAuth: true,
  },
}

export const Unauthorized: Story = {
  args: {
    isAuth: false,
  },
}
