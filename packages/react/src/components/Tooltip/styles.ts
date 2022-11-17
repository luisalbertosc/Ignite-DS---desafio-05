import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

// const slideUpAndFade = keyframes({
//   from: {
//     opacity: '0',
//     transform: 'translateY(2px)',
//   },
//   to: {
//     opacity: '1',
//     transform: 'translateY(0)',
//   },
// })

// const slideRightAndFade = keyframes({
//   from: {
//     opacity: '0',
//     transform: 'translateY(-2px)',
//   },
//   to: {
//     opacity: '1',
//     transform: 'translateY(0)',
//   },
// })

// const slideDownAndFade = keyframes({
//   from: {
//     opacity: '0',
//     transform: 'translateY(-2px)',
//   },
//   to: {
//     opacity: '1',
//     transform: 'translateY(0)',
//   },
// })

// const slideLeftAndFade = keyframes({
//   from: {
//     opacity: '0',
//     transform: 'translateY(2px)',
//   },
//   to: {
//     opacity: '1',
//     transform: 'translateY(0)',
//   },
// })

export const ContentContainer = styled(Tooltip.Content, {
  borderRadius: '$1',
  fontSize: '$4',
  lineHeight: 'shorter',
  animationDuration: '400ms',
  backgroundColor: '$gray900',
  color: '$white',
  willChange: 'transform, opacity',
  padding: '$2 $4',

  // '&[data-state=delayed-open][data-side=top]': {
  //   animation: `${slideDownAndFade} 200ms ease-out`,
  // },
  // '[data-state=delayed-open][data-side=right]': {
  //   animation: `${slideLeftAndFade} 200ms ease-out`,
  // },
  // '[data-state=delayed-open][data-side=bottom]': {
  //   animation: `${slideUpAndFade} 200ms ease-out`,
  // },
  // '[data-state=delayed-open][data-side=left]': {
  //   animation: `${slideRightAndFade} 200ms ease-out`,
  // },
})
export const TooltipContainer = styled(Tooltip.Root, {
  display: 'flex',
})

export const TriggerContainer = styled(Tooltip.Trigger, {
  button: {
    fontFamily: 'inherit',
    borderRadius: '$full',
    height: '$8',
    width: '$8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const ButtonContainer = styled('button', {
  fontFamily: 'inherit',
  borderRadius: '$full',
  height: '$8',
  width: '$8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  color: '$black',
})
