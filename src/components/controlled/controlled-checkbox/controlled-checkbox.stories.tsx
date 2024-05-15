import type { Meta, StoryObj } from '@storybook/react'

import { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type FormValues = Partial<Record<'check1' | 'check2' | 'check3', boolean>>

const meta = {
  component: ControlledCheckbox,
  tags: ['autodocs'],
  title: 'Components/Controlled/Checkbox',
} satisfies Meta<typeof ControlledCheckbox>

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
        <Typography variant={'h1'}>Form with controlled checkbox</Typography>
        <div style={style}>
          <ControlledCheckbox control={control} label={'Checkbox 1'} name={'check1'} />
          <ControlledCheckbox control={control} label={'Checkbox 2'} name={'check2'} />
          <ControlledCheckbox control={control} label={'Checkbox 3'} name={'check3'} />
        </div>
        <Button type={'submit'}>Submit</Button>
      </form>
    )
  },
}
