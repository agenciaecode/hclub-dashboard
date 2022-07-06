import * as Dialog from '@radix-ui/react-dialog';
import { keyframes } from '@stitches/react';

import { styled } from '@/theme';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const StyledOverlay = styled(Dialog.Overlay, {
  display: 'flex',
  position: 'fixed',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '2147483648',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  inset: 0,
  animation: `${overlayShow} 0.3s forwards`,
});

const StyledTopBar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const StyledDialogClose = styled(Dialog.Close, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  border: '1px solid black',
  borderRadius: '0.4rem',
});

const StyledTitle = styled(Dialog.Title, {
  width: '80%',
  maxWidth: 'fit-content',
  fontFamily: 'Raleway-Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '28px',
  marginBottom: '10px',
});

const StyledDescription = styled(Dialog.Description, {
  width: '80%',
  maxWidth: 'fit-content',
  overflow: 'hidden',
  fontFamily: 'Raleway-Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  marginBottom: '40px',
});

const StyledDialogContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  padding: '2rem',
  animation: `${contentShow} 0.3s forwards`,
  variants: {
    type: {
      btn: {},
      card: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
});

const StyledDialogTrigger = styled(Dialog.Trigger, {
  display: 'flex',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '1rem',
  width: '88%',
  fontFamily: 'Raleway-Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  variants: {
    type: {
      btn: {
        color: '$black',
      },
      card: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: '$white',
      },
    },
  },
});

export {
  StyledDialogContent,
  StyledDialogTrigger,
  StyledOverlay,
  StyledTitle,
  StyledDescription,
  StyledTopBar,
  StyledDialogClose,
};
