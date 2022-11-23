import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, ITextAreaProps } from '@nekeldev/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observation</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ITextAreaProps>

export const Primary: StoryObj<ITextAreaProps> = {
  args: {
    placeholder: 'Add observations',
  },
}

export const Disabled: StoryObj<ITextAreaProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<ITextAreaProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
