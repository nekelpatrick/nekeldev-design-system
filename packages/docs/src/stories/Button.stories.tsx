import { Button, ButtonProps } from '@nekeldev/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
