import { Box, IBoxProps } from '@nekeldev/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Box</span>
      </>
    ),
  },
} as Meta<IBoxProps>

export const Primary: StoryObj<IBoxProps> = {}
