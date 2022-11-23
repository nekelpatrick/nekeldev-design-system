import { Heading, IHeadingProps } from '@nekeldev/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Default Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IHeadingProps>

export const Primary: StoryObj<IHeadingProps> = {}

export const CustomTag: StoryObj<IHeadingProps> = {
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
