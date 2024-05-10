import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { OptionType, RadioGroup } from '@/components/ui/radio-group/radio-group'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/UI/Radio Group',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const DATA: OptionType[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

export const Controlled: Story = {
  args: {
    options: DATA,
  },

  render: args => {
    const [value, setValue] = useState('1')

    return (
      <>
        <RadioGroup
          {...args}
          defaultValue={value}
          onValueChange={value => setValue(value)}
          value={value}
        />
      </>
    )
  },
}

export const WithError: Story = {
  args: {
    errorMessage: 'some error message',
    options: DATA,
    value: '1',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: DATA,
  },
}
