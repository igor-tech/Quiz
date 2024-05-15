import type { Meta, StoryObj } from '@storybook/react'

import { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type FormValues = Partial<Record<'email' | 'password', string>>

const meta = {
  component: ControlledTextField,
  tags: ['autodocs'],
  title: 'Components/Controlled/Text field',
} satisfies Meta<typeof ControlledTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: '',
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
        <Typography variant={'h1'}>Form with controlled Text field</Typography>
        <ControlledTextField
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'email@example.com'}
        />

        <ControlledTextField
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />

        <Button type={'submit'}>Submit</Button>
      </form>
    )
  },
}
