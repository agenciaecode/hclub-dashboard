import Image from 'next/image';

import { Separator } from '@components/data-display/separator';

import { keyframes, styled } from '@/theme';
import { CSS } from '@/theme/stitches';

const StyledMobileHeaderWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexGrow: 1,
  '@md': {
    display: 'none',
  },
});

const StyledMenuButton = styled('button', {
  lineHeight: '0',
  transition: 'opacity 0.2s ease-in-out',
  '&:hover, &:focus': {
    opacity: 0.7,
  },
});

const openMobileNav = keyframes({
  from: { left: '-100vw' },
  to: { left: '0vw' },
});

const closeMobileNav = keyframes({
  from: { left: '0vw' },
  to: { left: '-100vw' },
});

const StyledMobileNavigation = styled('nav', {
  position: 'fixed',
  top: '0',
  width: 'max(100vw, 100%)',
  height: 'max(100vh, 100%)',
  padding: '3.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '$backgroundBlack',
  color: '$textWhite',
  zIndex: 'unset !important',
  '&[data-state="open"]': {
    animation: `${openMobileNav} 0.25s ease-in-out forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${closeMobileNav} 0.25s ease-in-out forwards`,
  },
});

const StyledAvatarWrapper = styled('div', {
  margin: '5rem 0',
});

const StyledUserAvatar = styled(Image, {
  borderRadius: '50%',
});

const textStyle: CSS = {
  color: '$textWhite',
  overflowWrap: 'anywhere',
};

const StyledUserName = styled(
  'h1',
  {
    color: '$textWhite',
    fontSize: '$2xl',
    lineHeight: '$2xl',
    marginBottom: '0.5rem',
  },
  textStyle,
);

const StyledUserEmail = styled(
  'h2',
  {
    fontSize: '$base',
    lineHeight: '$base',
  },
  textStyle,
);

const StyledSeparator = styled(Separator, {
  margin: '2rem 0',
  width: '60% !important',
});

const StyledButtonsToolbar = styled('div', {
  padding: '7rem 0',
  display: 'flex',
  gap: '2rem',
});

export {
  StyledMobileHeaderWrapper,
  StyledMenuButton,
  StyledMobileNavigation,
  StyledAvatarWrapper,
  StyledUserAvatar,
  StyledUserName,
  StyledUserEmail,
  StyledSeparator,
  StyledButtonsToolbar,
};
