import * as Dialog from '@radix-ui/react-dialog';
import { keyframes } from '@stitches/react';

import { styled } from '@/theme';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, right: -400 },
  '100%': { opacity: 1, right: 0 },
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
  margin: '27px 20px',
});

const StyledTitle = styled(Dialog.Title, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  width: '80%',
  maxWidth: 'fit-content',
  fontFamily: 'Raleway-Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '28px',
  margin: '27px 20px',
});

const StyledDialogContent = styled(Dialog.Content, {
  display: 'flex',
  width: '337px',
  height: '100%',
  flexDirection: 'column',
  alignSelf: 'end',
  right: 0,
  backgroundColor: '$white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  animation: `${contentShow} 0.3s forwards`,
  '@mobile': {
    width: '90%',
  },
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

const StyledDialogContentItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  margin: '1.3rem 0 1.3rem',
});

const StyledDialogContentItemLeft = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  fontFamily: 'Raleway-regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '13px',
  lineHeight: '19px',
  marginLeft: '2rem',
});
const StyledDialogContentItemRight = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  fontFamily: 'Raleway-regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '19px',
  color: 'rgba(102, 102, 102, 1)',
  marginRight: '2rem',
});

const StyledDialogTrigger = styled(Dialog.Trigger, {
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: 0,
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Raleway-Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  '@mobile': {
    border: '1px solid $black',
    borderRadius: '5px',
    width: '4.8rem',
    height: '4.8rem',
  },
});

const StyledDialogContentImg = styled('img', {
  display: 'flex',
  width: '100%',
  height: 'auto',
});

const StyledDialogContentBottom = styled('div', {
  display: 'flex',
  height: '100%',
  justifyContent: 'end',
  width: '100%',
  flexDirection: 'column',
  padding: '2rem',
});

const StyledDialogButton = styled('button', {
  width: '100%',
  fontFamily: 'Raleway-Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  height: '4.8rem',
  borderRadius: '5px',
  '&:hover': {
    border: '1px solid $black',
  },
});

export {
  StyledDialogContent,
  StyledDialogTrigger,
  StyledOverlay,
  StyledTitle,
  StyledTopBar,
  StyledDialogClose,
  StyledDialogContentItem,
  StyledDialogContentItemLeft,
  StyledDialogContentItemRight,
  StyledDialogContentImg,
  StyledDialogContentBottom,
  StyledDialogButton,
};
