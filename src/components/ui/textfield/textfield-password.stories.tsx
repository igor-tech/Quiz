import { useState } from 'react'

import { TextField } from '@/components/ui/textfield/TextField'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['search', 'password', 'text'],
    },
  },
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000' }],
    },
  },
  tags: ['autodocs'],
  title: 'Components/UI/Textfield/Password',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}
export const Focus: Story = {
  args: {
    autoFocus: true,
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}

export const Error: Story = {
  args: {
    label: 'label',
    placeholder: 'Введите текст',
    type: 'password',
  },
  render: args => {
    const [value, setValue] = useState('Invalid@gmail.com')
    const [error, setError] = useState('Error!')

    return (
      <>
        <TextField
          clearField={() => setValue('')}
          error={error}
          label={args.label}
          onChange={e => {
            setValue(e.currentTarget.value)
            setError('')
          }}
          placeholder={args.placeholder}
          type={args.type}
          value={value}
        />
      </>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}
