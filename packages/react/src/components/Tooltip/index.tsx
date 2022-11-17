import { ComponentProps } from 'react'
import {
  ButtonContainer,
  ContentContainer,
  TooltipContainer,
  TriggerContainer,
} from './styles'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Plus } from 'phosphor-react'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function TooltipComponent(props: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer>
        <TriggerContainer asChild>
          <ButtonContainer>
            <Plus size={32} weight="thin" />
          </ButtonContainer>
        </TriggerContainer>
        <Tooltip.Portal>
          <ContentContainer>
            21 de Outubro - Indisponível
            <Tooltip.Arrow />
          </ContentContainer>
        </Tooltip.Portal>
      </TooltipContainer>
    </Tooltip.Provider>
  )
}

TooltipComponent.displayName = 'Tooltip'
