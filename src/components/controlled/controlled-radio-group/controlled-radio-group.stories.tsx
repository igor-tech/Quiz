import type { Meta, StoryObj } from '@storybook/react'

import { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from '@/components/controlled/controlled-radio-group/controlled-radio-group'
import { Button } from '@/components/ui/button'
import { OptionType } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'

type FormValues = Partial<Record<'value', OptionType>>

const meta = {
  component: ControlledRadioGroup,
  tags: ['autodocs'],
  title: 'Components/Controlled/Radio Group',
} satisfies Meta<typeof ControlledRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options: OptionType[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

export const Default: Story = {
  args: {
    name: '',
    options: options,
  },
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    const style: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={style}>
        <Typography variant={'h1'}>Form with controlled radio group</Typography>
        <ControlledRadioGroup
          control={control}
          defaultValue={'1'}
          name={'value'}
          options={options}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
    )
  },
}
