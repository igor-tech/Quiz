import { useState } from 'react'

import { TextField } from '@/components/ui/textfield/TextField'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

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
  title: 'Components/UI/Textfield/Search',
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'label',
    placeholder: 'Введите текст',
    type: 'search',
  },
  render: args => {
    const [value, setValue] = useState('value')

    return (
      <>
        <TextField
          label={args.label}
          onChange={e => setValue(e.currentTarget.value)}
          onClearClick={() => setValue('')}
          placeholder={args.placeholder}
          type={args.type}
          value={value}
        />
      </>
    )
  },
}

export const Focus: Story = {
  args: {
    autoFocus: true,
    label: 'Input',
    onClearClick: fn(),
    placeholder: 'Input',
    type: 'search',
  },
}

export const Error: Story = {
  args: {
    label: 'label',
    placeholder: 'Введите текст',
    type: 'search',
  },
  render: args => {
    const [value, setValue] = useState('Invalid@gmail.com')
    const [error, setError] = useState('Error!')

    return (
      <>
        <TextField
          error={error}
          label={args.label}
          onChange={e => {
            setValue(e.currentTarget.value)
            setError('')
          }}
          onClearClick={() => setValue('')}
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
    type: 'search',
  },
}
