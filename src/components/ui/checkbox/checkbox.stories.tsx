import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Click here',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Click here',
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Click me',
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Click me',
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click here',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
      </>
    )
  },
}
