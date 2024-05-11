import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '@/assets/icons/components/edit'
import { Logout } from '@/assets/icons/components/logout'
import { More } from '@/assets/icons/components/more'
import { PlayCircle } from '@/assets/icons/components/play-circle'
import { Profile } from '@/assets/icons/components/profile'
import { Trash } from '@/assets/icons/components/trash'
import { ProfileInfo } from '@/components/header'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button/icon-button'

import {
  DropDownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './drop-down'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/UI/Dropdown menu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton>
            <More />
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropDownMenuItem>
            <PlayCircle />
            Learn
          </DropDownMenuItem>
          <DropdownMenuSeparator />
          <DropDownMenuItem>
            <Edit />
            Edit
          </DropDownMenuItem>
          <DropdownMenuSeparator />
          <DropDownMenuItem>
            <Trash />
            Delete
          </DropDownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const HeaderProfile: Story = {
  args: {},
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button style={{ all: 'unset', cursor: 'pointer' }}>
            <Avatar />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropDownMenuItem>
            <ProfileInfo avatar={''} email={'j&johnson@gmail.com'} name={'Ivan'} />
          </DropDownMenuItem>
          <DropdownMenuSeparator />
          <DropDownMenuItem>
            <Profile />
            My Profile
          </DropDownMenuItem>
          <DropdownMenuSeparator />
          <DropDownMenuItem>
            <Logout />
            Sign Out
          </DropDownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
