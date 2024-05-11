import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from '@/components/ui/tabs/tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/UI/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: '2',
    label: 'Some label',
    tabs: [
      { label: 'Switcher', value: '1' },
      { label: 'Switcher', value: '2' },
      { label: 'Switcher', value: '3' },
      { disabled: true, label: 'Switcher', value: '3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    tabs: [
      { disabled: true, label: 'Switcher', value: '1' },
      { disabled: true, label: 'Switcher', value: '2' },
      { disabled: true, label: 'Switcher', value: '3' },
    ],
  },
}

export const Long: Story = {
  args: {
    defaultValue: '1',
    label: 'Long tab switcher',
    tabs: [
      { label: 'Switcher', value: '1' },
      { label: 'Switcher', value: '2' },
      { label: 'Switcher', value: '3' },
      { label: 'Switcher', value: '4' },
      { label: 'Switcher', value: '5' },
      { label: 'Switcher', value: '6' },
    ],
  },
}
