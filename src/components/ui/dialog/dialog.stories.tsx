import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Trash } from '@/assets/icons/components/trash'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog/dialog'
import { Typography } from '@/components/ui/typography'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/UI/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Typography>
        Do you really want to remove <b>Card Name</b>?
        <br /> All cards will be deleted.
      </Typography>
    ),
    confirmText: 'Delete Card',
    onOpenChange: () => {},
    open: true,
    title: 'Delete Card',
  },
}

export const Controlled: Story = {
  args: {
    children: (
      <Typography>
        Do you really want to remove <b>Card Name</b>?
        <br /> All cards will be deleted.
      </Typography>
    ),
    confirmText: 'Delete Card',
    onOpenChange: () => {},
    open: true,
    title: 'Delete Card',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'secondary'}>
          Delete Card <Trash />
        </Button>
        <Dialog
          {...args}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          onOpenChange={setOpen}
          open={open}
          title={'Delete Card'}
        >
          <Typography variant={'body1'}>
            Do you really want to remove <b>Card Name</b>?
            <br /> All cards will be deleted.
          </Typography>
        </Dialog>
      </>
    )
  },
}
