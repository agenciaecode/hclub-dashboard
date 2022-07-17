import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { Spinner } from '@components/feedback/spinner';
import { Link } from '@components/navigator/link';
import { LogoutConfirmation } from '@components/overlay/logout-confirmation';
import { Tooltip } from '@components/overlay/tooltip';

import { useUserProfileQuery } from '@features/user';

import defaultAvatar from '@assets/images/user-avatar.svg';

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
} from './DesktopHeader.styles';

export const DesktopHeader = () => {
  const { data: userProfile, isSuccess } = useUserProfileQuery();

  return (
    <StyledDesktopHeaderWrapper>
      <StyledAccountSection>
        <Link href="/dashboard">
          <VisuallyHidden>Avatar</VisuallyHidden>
          {isSuccess ? (
            <StyledUserAvatar
              src={userProfile?.avatar?.url ?? defaultAvatar}
              width={userProfile?.avatar?.url ? 120 : 60}
              height={userProfile?.avatar?.url ? 120 : 60}
              alt="Avatar"
              objectFit="cover"
            />
          ) : (
            <Spinner css={{ margin: '5rem 5rem' }} />
          )}
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
