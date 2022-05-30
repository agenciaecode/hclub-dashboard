import userAvatar from '../../assets/images/griseo.jpeg';
import {
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
} from './DesktopHeader.styles';

const NotificationSvgIcon = () => (
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2245 4.76881L9.81208 2.8985L9.80807 2.89732L2.47447 0.758341C2.28818 0.704006 2.09179 0.693792 1.90087 0.728509C1.70994 0.763225 1.52972 0.841918 1.37448 0.958355C1.21924 1.07479 1.09324 1.22578 1.00646 1.39935C0.919678 1.57292 0.874504 1.76431 0.874512 1.95837V12.7916C0.874756 13.1226 1.00602 13.44 1.2396 13.6744C1.47318 13.9088 1.79008 14.0412 2.121 14.0426C2.24067 14.0425 2.35971 14.0253 2.47455 13.9917L8.99997 12.0884V13C9.00035 13.3314 9.13217 13.6491 9.3665 13.8835C9.60084 14.1178 9.91857 14.2496 10.25 14.25H12.75C13.0814 14.2496 13.3991 14.1178 13.6334 13.8835C13.8678 13.6491 13.9996 13.3314 14 13V10.6301L16.2245 9.98128C16.4836 9.90464 16.7111 9.74649 16.8732 9.53032C17.0354 9.31415 17.1235 9.05147 17.1245 8.78126V5.96876C17.1235 5.69856 17.0354 5.4359 16.8733 5.21974C16.7111 5.00358 16.4837 4.84545 16.2245 4.76881V4.76881ZM12.75 13H10.25V11.7238L12.75 10.9947V13ZM15.8745 8.78126L13.1906 9.56404L13.1884 9.56468L10.25 10.4217V4.32825L15.8745 5.96876V8.78126Z"
      fill="white"
    />
  </svg>
);

const GearSvgIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.4841 8.34236L16.9841 2.40761C16.6836 2.2389 16.3447 2.1503 16 2.1503C15.6553 2.1503 15.3164 2.2389 15.0159 2.40761L4.51588 8.34236C4.20777 8.51688 3.95143 8.76996 3.77298 9.07581C3.59452 9.38166 3.50033 9.72934 3.5 10.0834V21.9166C3.50033 22.2707 3.59452 22.6184 3.77298 22.9242C3.95143 23.2301 4.20777 23.4831 4.51588 23.6577L15.0159 29.5924C15.3164 29.7612 15.6553 29.8498 16 29.8498C16.3447 29.8498 16.6836 29.7612 16.9841 29.5924L27.4841 23.6577C27.7922 23.4831 28.0486 23.2301 28.227 22.9242C28.4055 22.6184 28.4997 22.2707 28.5 21.9166V10.0834C28.4997 9.72934 28.4055 9.38166 28.227 9.07581C28.0486 8.76996 27.7922 8.51688 27.4841 8.34236ZM16 20.5C15.11 20.5 14.24 20.2361 13.4999 19.7416C12.7599 19.2472 12.1831 18.5444 11.8425 17.7221C11.502 16.8998 11.4128 15.995 11.5865 15.1221C11.7601 14.2492 12.1887 13.4474 12.818 12.818C13.4474 12.1887 14.2492 11.7601 15.1221 11.5865C15.995 11.4128 16.8998 11.502 17.7221 11.8426C18.5443 12.1831 19.2471 12.7599 19.7416 13.4999C20.2361 14.24 20.5 15.11 20.5 16C20.4987 17.1931 20.0241 18.3369 19.1805 19.1805C18.3369 20.0241 17.1931 20.4987 16 20.5Z"
      fill="white"
    />
  </svg>
);

export const DesktopHeader = () => (
  <StyledNavigation>
    <StyledAccountSection>
      <StyledUserAvatar src={userAvatar} width={120} height={120} />
      <StyledUserInfo>
        <StyledUserName>Gabriel Franco</StyledUserName>
        <StyledUserEmail>Deverasart@gmail.com</StyledUserEmail>
      </StyledUserInfo>
      <StyledSeparator />
      <StyledAccountManageSection>
        <StyledAccountManageIconWrapper>
          <GearSvgIcon />
        </StyledAccountManageIconWrapper>
        <StyledAccountManageTextWrapper>
          <span>Meus dados</span>
          <StyledAccountManageLink href="/login">
            Gerenciar
          </StyledAccountManageLink>
        </StyledAccountManageTextWrapper>
      </StyledAccountManageSection>
    </StyledAccountSection>
    <StyledButtonsToolbar>
      <StyledNotificationButton outlined>
        <NotificationSvgIcon />
      </StyledNotificationButton>
      <StyledLogoutButton outlined>Sair da conta</StyledLogoutButton>
    </StyledButtonsToolbar>
  </StyledNavigation>
);
