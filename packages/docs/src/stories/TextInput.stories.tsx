import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, ITextInputProps } from '@nekeldev/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ITextInputProps>

export const Primary: StoryObj<ITextInputProps> = {
  args: {
    placeholder: 'Type your Email',
  },
}

export const Disabled: StoryObj<ITextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<ITextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
