import Image from 'next/image';

import { Button } from '@components/forms/button';
import { Link } from '@components/icons/navigator/link';

import { styled } from '@/theme';

const StyledNavigation = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '18.4rem',
  width: '100%',
  padding: '0 8rem',
  backgroundColor: '$backgroundBlack',
});

const StyledButtonsToolbar = styled('section', {
  display: 'flex',
  gap: '2rem',
});

const StyledLogoutButton = styled(Button, {
  padding: '1.45rem 5rem',
});

const StyledNotificationButton = styled(Button, {
  padding: '1.775rem 1.587rem',
});

const StyledAccountSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  margin: '2rem 4rem',
  alignSelf: 'stretch',
});

const StyledAccountManageSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1.6rem',
  marginRight: '1rem',
});

const StyledAccountManageIconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
});

const StyledAccountManageTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontSize: '$base',
  lineHeight: '$base',
});

const StyledAccountManageLink = styled(Link, {
  fontSize: '$lg',
  lineHeight: '$lg',
  fontWeight: '$defaultRegular',
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',
  textDecorationThickness: '0.1rem',
});

export {
  StyledNavigation,
  StyledButtonsToolbar,
  StyledLogoutButton,
  StyledNotificationButton,
  StyledAccountSection,
  StyledUserAvatar,
  StyledUserInfo,
  StyledUserName,
  StyledUserEmail,
  StyledSeparator,
  StyledAccountManageSection,
  StyledAccountManageIconWrapper,
  StyledAccountManageTextWrapper,
  StyledAccountManageLink,
};
