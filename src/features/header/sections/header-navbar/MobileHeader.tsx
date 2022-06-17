import Image from 'next/image';

import { CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { Portal } from '@radix-ui/react-portal';

import { Collapsible } from '@components/data-display/collapsible';
import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { Spinner } from '@components/feedback/spinner';

import { useUserProfileQuery } from '@features/user';

import logoImage from '@assets/images/logo-hman-white.svg';
import defaultAvatar from '@assets/images/user-avatar.svg';

import { AccountManage } from './components/account-manage';
import { FeedbackButton } from './components/feedback-button';
import { LogoutButton } from './components/logout-button/LogoutButton';
import {
  StyledUserAvatar,
  StyledMenuButton,
  StyledMobileHeaderWrapper,
  StyledMobileNavigation,
  StyledAvatarWrapper,
  StyledUserName,
  StyledUserEmail,
  StyledSeparator,
  StyledButtonsToolbar,
} from './MobileHeader.styles';

const HmanLogoWhite = () => (
  <Image src={logoImage} alt="H.man Logo" width={60} height={60} />
);

const HamburgerMenuSvgIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 16H27"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 8H27"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 24H27"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseMenuSvgIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 7L7 25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 25L7 7"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseMobileMenuButton = () => (
  <CollapsibleTrigger asChild>
    <StyledMenuButton type="button" css={{ alignSelf: 'flex-end' }}>
      <CloseMenuSvgIcon />
      <VisuallyHidden>Fechar menu de navegação</VisuallyHidden>
    </StyledMenuButton>
  </CollapsibleTrigger>
);

export const MobileHeader = () => {
  const { data: userProfile, isSuccess } = useUserProfileQuery();

  return (
    <StyledMobileHeaderWrapper>
      <HmanLogoWhite />
      <Collapsible
        trigger={
          <StyledMenuButton type="button">
            <HamburgerMenuSvgIcon />
            <VisuallyHidden>Abrir menu de navegação</VisuallyHidden>
          </StyledMenuButton>
        }
      >
        <Portal asChild>
          <StyledMobileNavigation>
            <CloseMobileMenuButton />
            <StyledAvatarWrapper>
              {isSuccess ? (
                <StyledUserAvatar
                  src={userProfile?.avatar?.url ?? defaultAvatar}
                  width={userProfile?.avatar?.url ? 120 : 100}
                  height={userProfile?.avatar?.url ? 120 : 100}
                />
              ) : (
                <Spinner css={{ margin: '5rem 5rem' }} />
              )}
            </StyledAvatarWrapper>
            <StyledUserName>
              {userProfile?.name ?? 'carregando...'}
            </StyledUserName>
            <StyledUserEmail>
              {userProfile?.email ?? 'carregando...'}
            </StyledUserEmail>
            <StyledSeparator />
            <AccountManage mobile />
            <StyledButtonsToolbar>
              <FeedbackButton />
              <LogoutButton />
            </StyledButtonsToolbar>
          </StyledMobileNavigation>
        </Portal>
      </Collapsible>
    </StyledMobileHeaderWrapper>
  );
};
