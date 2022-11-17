import type { Meta, StoryObj } from '@storybook/react'
import { TooltipComponent, TooltipProps } from '@ignite-ui/react'
export default {
  title: 'Form/Tooltip',
  component: TooltipComponent,
  args: {
    children: 'Custom title'
  }
} as Meta<TooltipProps>
export const Primary: StoryObj<TooltipProps> = {}
