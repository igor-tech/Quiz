import type { Meta, StoryObj } from '@storybook/react'

import { Edit } from '@/assets/icons/components/Edit'
import { LogOut } from '@/assets/icons/components/LogOut'
import { PlayCircle } from '@/assets/icons/components/PlayCircle'
import { Profile } from '@/assets/icons/components/Profile'
import { Trash } from '@/assets/icons/components/Trash'
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
          <button style={{ all: 'unset', cursor: 'pointer' }}>
            <img
              alt={''}
              height={36}
              src={'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg'}
              style={{ borderRadius: '50%' }}
              width={36}
            />
          </button>
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
