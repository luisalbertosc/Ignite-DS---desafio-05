import type { Meta, StoryObj } from '@storybook/react'
import { ToastComponent, ToastProps } from '@ignite-ui/react'
export default {
  title: 'Form/Toast',
  component: ToastComponent,
  args: {
    children: 'Custom title'
  }
} as Meta<ToastProps>
export const Primary: StoryObj<ToastProps> = {}
