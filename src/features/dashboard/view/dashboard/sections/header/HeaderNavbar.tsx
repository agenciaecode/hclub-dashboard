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

export const HeaderNavbar = () => (
  <StyledNavigation>
    <DesktopHeader />
    <MobileHeader />
  </StyledNavigation>
);
