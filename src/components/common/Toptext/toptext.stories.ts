import { Meta, StoryObj } from '@storybook/react'
import Toptext from './TopText'

const meta: Meta<typeof Toptext> = {
  component: Toptext,
  title: 'Toptext',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['main', 'sub', 'title'],
    },
    date: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    text: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
}

export default meta

type story = StoryObj<typeof meta>

export const MainText: story = {
  args: {
    variant: 'main',
  },
}
export const TitleText: story = {
  args: {
    variant: 'title',
  },
}
export const SubText: story = {
  args: {
    variant: 'sub',
  },
}
