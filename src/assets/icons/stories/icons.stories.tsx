import type { Meta, StoryObj } from '@storybook/react'

import { ArrowBack } from '@/assets/icons/components/arrow-back'
import { ArrowDown } from '@/assets/icons/components/arrow-down'
import { Check } from '@/assets/icons/components/check'
import { Close } from '@/assets/icons/components/close'
import { Edit } from '@/assets/icons/components/edit'
import { Eye } from '@/assets/icons/components/eye'
import { EyeOff } from '@/assets/icons/components/eye-off'
import { Image } from '@/assets/icons/components/image'
import { Logout } from '@/assets/icons/components/logout'
import { More } from '@/assets/icons/components/more'
import { MoreHorizontal } from '@/assets/icons/components/more-horizontal'
import { PlayCircle } from '@/assets/icons/components/play-circle'
import { Profile } from '@/assets/icons/components/profile'
import { Search } from '@/assets/icons/components/search'
import { StarFilled } from '@/assets/icons/components/star-filled'
import { StarOutline } from '@/assets/icons/components/star-outline'
import { Trash } from '@/assets/icons/components/trash'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'

import styles from './icons.module.scss'

const meta = {
  component: IconButton,
  tags: ['autodocs'],
  title: 'Icons/All icons',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <div className={styles.wrapper}>
        <Typography variant={'h1'}>All Icons</Typography>

        <div className={styles.block}>
          <PlayCircle />
          <Edit />
          <Trash />
          <More />
        </div>

        <div className={styles.block}>
          <Check />
          <Close />
          <Eye />
          <EyeOff />
        </div>

        <div className={styles.block}>
          <Logout />
          <PlayCircle />
          <Profile />
          <Search />
        </div>

        <div className={styles.block}>
          <ArrowBack />
          <ArrowDown />
          <Image />
          <MoreHorizontal />
        </div>

        <div className={styles.block}>
          <StarFilled />
          <StarOutline />
        </div>
      </div>
    )
  },
}
