import { ComponentProps, useEffect, useRef, useState } from 'react'
import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ActionContainer,
  ButtonContainer,
  ToastContainer,
  ToastContent,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function ToastComponent(props: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <Toast.Provider swipeDirection="right">
      <ToastContainer>
        <ButtonContainer
          onClick={() => {
            window.clearTimeout(timerRef.current)
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = oneWeekAway()
              setOpen(true)
            }, 300)
          }}
        >
          Agendar
        </ButtonContainer>

        <ToastContent open={open} onOpenChange={setOpen}>
          <ActionContainer>
            <strong>Agendamento realizado</strong>
            <span>{prettyDate(eventDateRef.current)}</span>
          </ActionContainer>
          <Toast.Action asChild altText="Goto schedule to undo">
            <button>
              <X size={22} weight="thin" />
            </button>
          </Toast.Action>
        </ToastContent>
        <Toast.Viewport />
      </ToastContainer>
    </Toast.Provider>
  )
}

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 1)
  return new Date(inOneWeek)
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)
}

ToastComponent.displayName = 'ToastComponent'
