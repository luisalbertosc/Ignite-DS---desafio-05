import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  fontFamily: '$default',
})
export const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$20',
  height: '$10',
  background: '$ignite300',
  border: 'none',
  color: '$white',
  fontFamily: '$default',
  borderRadius: '$md',
})

export const ToastContent = styled(Toast.Root, {
  height: '82px',
  width: '360px',
  background: '$gray800',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$4',
  borderRadius: '$sm',
  border: '1px solid $gray600',

  button: {
    border: 'none',
    background: 'transparent',
    color: '$gray200',
  },
})

export const ActionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  span: {
    color: '$gray200',
  },
})
