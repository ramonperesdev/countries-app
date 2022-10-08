import { keyframes, styled } from '..';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const ContentTrigger = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '2.8rem',
  padding: '0 15px',
  width: 220,
  backgroundColor: '$white',
  boxShadow: '0px 0px 20px -5px rgba(0,0,0,0.25)',
  cursor: 'default',
  pointerEvents: 'auto',
  borderRadius: 5,

  variants: {
    openDropdown: {
      true: {
        svg: {
          transform: 'rotate(-90deg)',
          transition: 'transform 200ms ease',
        },
      },
      false: {
        svg: {
          transform: 'rotate(0deg)',
          transition: 'transform 200ms ease',
        },
      },
    },
  },

  svg: {
    width: 15,
    height: 15,
  },
});

export const NameTrigger = styled('span', {
  fontWeight: 500,
});

export const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '200ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const StyledItem = styled(DropdownMenuPrimitive.Item, {
  all: 'unset',
  fontSize: '0.875rem',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: 0,
  position: 'relative',
  paddingLeft: 10,
  userSelect: 'none',
  cursor: 'pointer',

  '&[data-disabled]': {
    color: '$gray300',
    pointerEvents: 'none',
  },
});
