import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '@/assets/icons/components/Edit'
import { LogOut } from '@/assets/icons/components/LogOut'
import { PlayCircle } from '@/assets/icons/components/PlayCircle'
import { Profile } from '@/assets/icons/components/Profile'
import { Trash } from '@/assets/icons/components/Trash'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

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
          <Button>Open</Button>
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
          <DropDownMenuItem></DropDownMenuItem>
          <DropdownMenuSeparator />
          <DropDownMenuItem>
            <Profile />
            My Profile
          </DropDownMenuItem>
          <DropdownMenuSeparator />
          <DropDownMenuItem>
            <LogOut />
            Sign Out
          </DropDownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
