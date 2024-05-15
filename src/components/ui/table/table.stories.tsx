import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Edit } from '@/assets/icons/components/edit'
import { PlayCircle } from '@/assets/icons/components/play-circle'
import { Trash } from '@/assets/icons/components/trash'
import { IconButton } from '@/components/ui/icon-button'
import { Sort, Table } from '@/components/ui/table/table'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/UI/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Table.Root>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Cards</Table.HeadCell>
          <Table.HeadCell>Last Updated</Table.HeadCell>
          <Table.HeadCell>Created by</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pack Name</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.03.2021</Table.Cell>
            <Table.Cell>Ivan Ivanov</Table.Cell>
            <Table.Cell>
              <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                <IconButton variant={'small'}>
                  <PlayCircle />
                </IconButton>
                <IconButton variant={'small'}>
                  <Edit />
                </IconButton>
                <IconButton variant={'small'}>
                  <Trash />
                </IconButton>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pack Name</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.03.2021</Table.Cell>
            <Table.Cell>Ivan Ivanov</Table.Cell>
            <Table.Cell>
              <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                <IconButton variant={'small'}>
                  <PlayCircle />
                </IconButton>
                <IconButton variant={'small'}>
                  <Edit />
                </IconButton>
                <IconButton variant={'small'}>
                  <Trash />
                </IconButton>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pack Name</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.03.2021</Table.Cell>
            <Table.Cell>Ivan Ivanov</Table.Cell>
            <Table.Cell>
              <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                <IconButton variant={'small'}>
                  <PlayCircle />
                </IconButton>
                <IconButton variant={'small'}>
                  <Edit />
                </IconButton>
                <IconButton variant={'small'}>
                  <Trash />
                </IconButton>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    )
  },
}

const columns = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cards',
    title: 'Cards',
  },
  {
    key: 'last-updated',
    title: 'Last Updated',
  },
  {
    key: 'created-by',
    title: 'Created by',
  },
  {
    key: 'icons',
    sortable: false,
    title: '',
  },
]

export const TableWithSort: Story = {
  args: {},
  render: () => {
    const [sort, setSort] = useState<Sort>({ direction: 'desc', key: 'name' })

    return (
      <Table.Root>
        <Table.HeadWithSort columns={columns} onSort={setSort} sort={sort}>
          afsd
        </Table.HeadWithSort>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pack Name</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.03.2021</Table.Cell>
            <Table.Cell>Ivan Ivanov</Table.Cell>
            <Table.Cell>
              <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                <IconButton variant={'small'}>
                  <PlayCircle />
                </IconButton>
                <IconButton variant={'small'}>
                  <Edit />
                </IconButton>
                <IconButton variant={'small'}>
                  <Trash />
                </IconButton>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pack Name</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.03.2021</Table.Cell>
            <Table.Cell>Ivan Ivanov</Table.Cell>
            <Table.Cell>
              <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                <IconButton variant={'small'}>
                  <PlayCircle />
                </IconButton>
                <IconButton variant={'small'}>
                  <Edit />
                </IconButton>
                <IconButton variant={'small'}>
                  <Trash />
                </IconButton>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pack Name</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>18.03.2021</Table.Cell>
            <Table.Cell>Ivan Ivanov</Table.Cell>
            <Table.Cell>
              <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
                <IconButton variant={'small'}>
                  <PlayCircle />
                </IconButton>
                <IconButton variant={'small'}>
                  <Edit />
                </IconButton>
                <IconButton variant={'small'}>
                  <Trash />
                </IconButton>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    )
  },
}
