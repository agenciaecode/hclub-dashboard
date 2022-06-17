import { useUserProfileQuery } from '@features/user';

import { styled } from '@/theme';

import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

const StyledNavigation = styled('nav', {
  display: 'flex',
  height: '10rem',
  width: '100%',
  padding: '2rem 3.2rem',
  backgroundColor: '$backgroundBlack',
  '@md': {
    height: '18.4rem',
    padding: '0 8rem',
  },
});

const StyledAccountBlockedWarning = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0.5rem 0',
  background: '#e74c3c',
  zIndex: 1,
  fontSize: '1.4rem',
});

export const HeaderNavbar = () => {
  const userProfileQuery = useUserProfileQuery();

  return (
    <StyledNavigation>
      {userProfileQuery.data?.status === 'block' && (
        <StyledAccountBlockedWarning>
          Conta bloqueada!
        </StyledAccountBlockedWarning>
      )}
      <DesktopHeader />
      <MobileHeader />
    </StyledNavigation>
  );
};
