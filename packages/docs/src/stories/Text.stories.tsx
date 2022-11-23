import { Text, ITextProps } from '@nekeldev/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel officia laboriosam! Odio, numquam quisquam? Cupiditate voluptatibus inventore voluptas delectus ipsum.',
  },
} as Meta<ITextProps>

export const Primary: StoryObj<ITextProps> = {}

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text.',
    as: 'strong',
  },
}
