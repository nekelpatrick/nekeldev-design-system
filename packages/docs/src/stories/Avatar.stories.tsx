import { Avatar, IAvatarProps } from '@nekeldev/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/nekelpatrick.png',
    alt: 'Patrick Nekel',
  },
} as Meta<IAvatarProps>

export const Primary: StoryObj<IAvatarProps> = {}

export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined,
  },
}
