import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { keyframes, styled } from '@/theme';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.1)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
  '100%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.1)' },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${overlayHide} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledAlertDialogContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: '$base',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(500px, 85vw)',
  maxWidth: 'min(500px, 85vw)',
  // maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${contentHide} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

const StyledAlertDialogTitle = styled(AlertDialogPrimitive.Title, {
  color: '$textBlack',
  fontSize: '$xl',
  lineHeight: '$xl',
  textAlign: 'center',
});

const StyledAlertDialogDescription = styled(AlertDialogPrimitive.Description, {
  margin: '1.2rem 0 3.2rem',
  color: '$textBlack',
  fontSize: '$sm',
  lineHeight: '$sm',
  textAlign: 'center',
  '@sm': {
    marginBottom: '4rem',
  },
});

export {
  StyledOverlay,
  StyledAlertDialogContent,
  StyledAlertDialogTitle,
  StyledAlertDialogDescription,
};
