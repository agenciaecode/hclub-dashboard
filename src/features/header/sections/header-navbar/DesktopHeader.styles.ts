import Image from 'next/image';

import { Button } from '@components/forms/button';

import { styled } from '@/theme';

const StyledDesktopHeaderWrapper = styled('div', {
  width: '100%',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@md': {
    display: 'flex',
  },
});

const StyledButtonsToolbar = styled('section', {
  display: 'flex',
  gap: '2rem',
});

const StyledLogoutButton = styled(Button, {
  padding: '1rem 1rem',
  '@desktop': {
    padding: '1.45rem 5rem',
  },
});

const StyledAccountSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledFigureContainer = styled('figure', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  $$sizing: '12rem',
  width: '$$sizing',
  height: '$$sizing',
  color: '$textWhite',
});

const StyledUserAvatar = styled(Image, {
  borderRadius: '50%',
});

const StyledUserInfo = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: '2.4rem',
});

const StyledUserName = styled('h1', {
  fontSize: '$2xl',
  lineHeight: '$2xl',
  fontWeight: '$base',
  maxWidth: '30rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const StyledUserEmail = styled('h2', {
  fontSize: '$base',
  lineHeight: '$base',
  fontWeight: '$base',
  maxWidth: '30rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const StyledSeparator = styled('hr', {
  borderLeft: 'solid 1px $white',
  backgroundColor: '$border',
  margin: '0rem 1rem',
  alignSelf: 'stretch',
  '@tablet': {
    margin: '2rem 1rem',
  },
  '@desktop': {
    margin: '2rem 4rem',
  },
});

export {
  StyledDesktopHeaderWrapper,
  StyledButtonsToolbar,
  StyledLogoutButton,
  StyledAccountSection,
  StyledFigureContainer,
  StyledUserAvatar,
  StyledUserInfo,
  StyledUserName,
  StyledUserEmail,
  StyledSeparator,
};
