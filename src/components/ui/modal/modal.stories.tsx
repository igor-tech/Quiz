import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/UI/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti earum, et
          fuga molestiae nobis odio officia omnis quam repellat. Delectus eos maiores perspiciatis
          quae. A iusto laboriosam repudiandae saepe.
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
            marginTop: '36px',
          }}
        >
          <Button variant={'secondary'}>Secondary Button</Button>
          <Button variant={'primary'}>Primary Button</Button>
        </div>
      </>
    ),
    onOpenChange: () => {},
    open: true,
    title: 'Some Title',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal {...args} onOpenChange={setOpen} open={open} title={'Some label'}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti earum, et
            fuga molestiae nobis odio officia omnis quam repellat. Delectus eos maiores perspiciatis
            quae. A iusto laboriosam repudiandae saepe. lorem Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab aliquid beatae consectetur eaque eius fuga in ipsam
            iure laboriosam libero maxime modi obcaecati placeat quia, quod sint tempore vitae. Ea
            eius enim nulla odit reprehenderit sint, vel voluptatum. Ab accusantium aliquam
            aspernatur aut consectetur cum distinctio dolores ex fugiat in ipsum, laudantium libero
            minus nostrum, officiis placeat quod repellendus sequi similique sint soluta tempore
            voluptatum. Adipisci aliquam beatae dolores, eaque eveniet exercitationem maxime omnis
            pariatur tempora veniam. Accusamus aliquam asperiores deserunt dolores eius enim eum
            facere impedit labore, laudantium minima modi molestias natus nulla omnis quidem quod
            rerum tempora tenetur voluptates! Cupiditate dolores, itaque mollitia nam porro quae qui
            quisquam reiciendis veritatis. Autem, praesentium reiciendis! Ipsam, pariatur,
            voluptate! Accusamus animi aperiam atque aut deleniti dicta distinctio dolore doloremque
            dolores ducimus esse fugit illo impedit incidunt iste maxime molestias nam natus
            necessitatibus nesciunt nihil non nulla officiis perspiciatis quam qui quia quod, rem
            rerum sed sint sit suscipit tempore totam ullam voluptatem voluptatibus! Aperiam
            architecto assumenda corporis dolore ea impedit iure, libero magni minima minus non
            officiis porro, praesentium tempore velit! Autem consequuntur esse exercitationem, fugit
            iure laboriosam libero minus natus, nisi obcaecati officiis possimus rem repudiandae
            similique temporibus ullam vitae.
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
              marginTop: '36px',
            }}
          >
            <Button variant={'secondary'}>Secondary Button</Button>
            <Button variant={'primary'}>Primary Button</Button>
          </div>
        </Modal>
      </>
    )
  },
}
