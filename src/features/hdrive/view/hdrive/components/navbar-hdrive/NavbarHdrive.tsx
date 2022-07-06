import { ReactNode } from 'react';

import { StyledNavbarHdrive } from './NavbarHdrive.styles';

type NavbarHdriveProps = {
  children: ReactNode;
};

const NavbarHdrive = ({ children }: NavbarHdriveProps) => (
  <StyledNavbarHdrive>{children}</StyledNavbarHdrive>
);

export { NavbarHdrive };
