import { ComponentProps } from 'react';

import {
  StyledAccountManageIconWrapper,
  StyledAccountManageLink,
  StyledAccountManageSection,
  StyledAccountManageTextWrapper,
} from './AccountManage.styles';

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

export const AccountManage = ({
  mobile,
}: ComponentProps<typeof StyledAccountManageTextWrapper>) => (
  <StyledAccountManageSection>
    <StyledAccountManageIconWrapper>
      <GearSvgIcon />
    </StyledAccountManageIconWrapper>
    <StyledAccountManageTextWrapper mobile={mobile}>
      <span>Meus dados</span>
      <StyledAccountManageLink href="/meus-dados" mobile={mobile}>
        Gerenciar
      </StyledAccountManageLink>
    </StyledAccountManageTextWrapper>
  </StyledAccountManageSection>
);
