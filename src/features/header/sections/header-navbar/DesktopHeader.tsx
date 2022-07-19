import React from 'react';

import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { Spinner } from '@components/feedback/spinner';
import { UserIcon } from '@components/icons/user-icon/UserIcon';
import { Link } from '@components/navigator/link';
import { LogoutConfirmation } from '@components/overlay/logout-confirmation';
import { Tooltip } from '@components/overlay/tooltip';

import { useUserProfileQuery } from '@features/user';

import { AccountManage } from './components/account-manage';
import { FeedbackButton } from './components/feedback-button';
import {
  StyledDesktopHeaderWrapper,
  StyledButtonsToolbar,
  StyledLogoutButton,
  StyledAccountSection,
  StyledUserAvatar,
  StyledUserInfo,
  StyledUserName,
  StyledUserEmail,
  StyledSeparator,
  StyledFigureContainer,
} from './DesktopHeader.styles';

export const DesktopHeader = () => {
  const { data: userProfile, isSuccess } = useUserProfileQuery();

  return (
    <StyledDesktopHeaderWrapper>
      <StyledAccountSection>
        <Link href="/dashboard">
          <StyledFigureContainer>
            <VisuallyHidden>Avatar</VisuallyHidden>
            {/* eslint-disable-next-line no-nested-ternary */}
            {isSuccess ? (
              userProfile?.avatar?.url ? (
                <StyledUserAvatar
                  src={userProfile.avatar.url}
                  width={120}
                  height={120}
                  alt="Avatar"
                  objectFit="cover"
                />
              ) : (
                <UserIcon />
              )
            ) : (
              <Spinner css={{ margin: '5rem 5rem' }} />
            )}
          </StyledFigureContainer>
        </Link>
        <StyledUserInfo>
          <Tooltip content={userProfile?.name ?? 'carregando...'}>
            <StyledUserName>
              {userProfile?.name ?? 'carregando...'}
            </StyledUserName>
          </Tooltip>
          <Tooltip content={userProfile?.email ?? 'carregando...'}>
            <StyledUserEmail>
              {userProfile?.email ?? 'carregando...'}
            </StyledUserEmail>
          </Tooltip>
        </StyledUserInfo>
        <StyledSeparator />
        <AccountManage />
      </StyledAccountSection>
      <StyledButtonsToolbar>
        <FeedbackButton />
        <LogoutConfirmation>
          <StyledLogoutButton outlined>Sair da conta</StyledLogoutButton>
        </LogoutConfirmation>
      </StyledButtonsToolbar>
    </StyledDesktopHeaderWrapper>
  );
};
