import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '@/assets/icons/components/edit'
import { More } from '@/assets/icons/components/more'
import { PlayCircle } from '@/assets/icons/components/play-circle'
import { Trash } from '@/assets/icons/components/trash'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'

const meta = {
  component: IconButton,
  tags: ['autodocs'],
  title: 'Icons/Icons Buttons',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '60px' }}>
        <div>
          <Typography variant={'h2'}>Default</Typography>
          <div style={{ columnGap: '30px', display: 'flex' }}>
            <IconButton>
              <PlayCircle />
            </IconButton>
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton>
              <Trash />
            </IconButton>
            <IconButton>
              <More />
            </IconButton>
          </div>
        </div>
        <div>
          <Typography variant={'h2'}>Small</Typography>
          <div style={{ columnGap: '30px', display: 'flex' }}>
            <IconButton variant={'small'}>
              <PlayCircle />
            </IconButton>
            <IconButton variant={'small'}>
              <Edit />
            </IconButton>
            <IconButton variant={'small'}>
              <Trash />
            </IconButton>
            <IconButton variant={'small'}>
              <More />
            </IconButton>
          </div>
        </div>
        <div>
          <Typography variant={'h2'}>Disabled</Typography>
          <div style={{ columnGap: '30px', display: 'flex' }}>
            <IconButton disabled>
              <PlayCircle />
            </IconButton>
            <IconButton disabled>
              <Edit />
            </IconButton>
            <IconButton disabled>
              <Trash />
            </IconButton>
            <IconButton disabled>
              <More />
            </IconButton>
          </div>
        </div>
      </div>
    )
  },
}
