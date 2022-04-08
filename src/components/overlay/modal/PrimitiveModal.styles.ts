import * as DialogPrimitive from '@radix-ui/react-dialog';

import { keyframes, styled } from '@/theme';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.1)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$blackLighter',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: '1rem',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 'min(90vw, 742px)',
  maxHeight: '85vh',
  padding: '3.2rem',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: '$defaultRegular',
  color: '$textBlack',
  fontSize: '$xl',
  lineHeight: '$xl',
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '0.8rem 0 3.9rem',
  color: '$textBlack',
  fontSize: '$sm',
  lineHeight: '$sm',
});

export { StyledOverlay, StyledContent, StyledTitle, StyledDescription };
