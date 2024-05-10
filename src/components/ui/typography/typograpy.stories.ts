import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const TEXT = `Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: TEXT,
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children: TEXT,
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    children: TEXT,
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    as: 'h4',
    children: TEXT,
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    children: TEXT,
    disabled: false,
    variant: 'body1',
  },
}

export const Subtitle1: Story = {
  args: {
    children: TEXT,
    variant: 'subtitle1',
  },
}

export const Body2: Story = {
  args: {
    children: TEXT,
    variant: 'body2',
  },
}

export const Subtitle2: Story = {
  args: {
    children: TEXT,
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: TEXT,
    variant: 'overline',
  },
}

export const Overline: Story = {
  args: {
    children: TEXT,
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    children: TEXT,
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    children: TEXT,
    variant: 'link2',
  },
}
