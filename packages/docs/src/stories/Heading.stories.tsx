import { Text, ITextProps } from '@nekeldev/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Text,

  args: {
    children: 'Default Title',
  },
} as Meta<ITextProps>

export const Primary: StoryObj<ITextProps> = {}

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'H1 Title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, a Heading is always a H2 element. But you can also change this by using the `as h1` property. ',
      },
    },
  },
}
