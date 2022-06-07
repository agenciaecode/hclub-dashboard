import { Tooltip } from '@components/overlay/tooltip';

import userAvatar from '../../assets/images/griseo.jpeg';
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

export const DesktopHeader = () => (
  <StyledDesktopHeaderWrapper>
    <StyledAccountSection>
      <StyledUserAvatar src={userAvatar} width={120} height={120} />
      <StyledUserInfo>
        <Tooltip content="Gabriel Franco">
          <StyledUserName>Gabriel Franco</StyledUserName>
        </Tooltip>
        <Tooltip content="Deverasart@gmail.com">
          <StyledUserEmail>Deverasart@gmail.com</StyledUserEmail>
        </Tooltip>
      </StyledUserInfo>
      <StyledSeparator />
      <AccountManage />
    </StyledAccountSection>
    <StyledButtonsToolbar>
      <FeedbackButton />
      <StyledLogoutButton outlined>Sair da conta</StyledLogoutButton>
    </StyledButtonsToolbar>
  </StyledDesktopHeaderWrapper>
);
