import type { Meta, StoryObj } from '@storybook/react'

import { ProfileInfo } from '@/components/header/profile-info/profile-info'

const meta = {
  argTypes: {},
  component: ProfileInfo,
  tags: ['autodocs'],
  title: 'Components/UI/Profile Info',
} satisfies Meta<typeof ProfileInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar:
      'https://sun9-41.userapi.com/impg/K6P8acpJygfORw5T0SyIsEwPfvs9aUIRR1PQwg/c6DCEgrq7MU.jpg?size=735x681&quality=96&sign=96b033cbd2e755def37344fe13f2159a&c_uniq_tag=jeY7DN57j2fw_j-vhOi5IGJI_7IYTog22Mqm1KDgQVs&type=album',
    email: 'j&johnson@gmail.com',
    name: 'Ivan',
  },
}
