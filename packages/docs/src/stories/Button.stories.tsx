import type { Meta, StoryObj } from '@storybook/react'
import { Button, IButtonProps } from '@nekeldev/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<IButtonProps>

export const Primary: StoryObj<IButtonProps> = {}

export const Secondary: StoryObj<IButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<IButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<IButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<IButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<IButtonProps> = {
  args: {
    disabled: true,
  },
}
