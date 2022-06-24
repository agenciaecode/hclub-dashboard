/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import { ComponentProps } from 'react';

import logoWhite from '@assets/images/logo-hman-white.svg';

import { StyledNav } from './Navbar.styles';

const Navbar = ({
  children,
  ...navProps
}: ComponentProps<typeof StyledNav>) => (
  <StyledNav {...navProps}>
    <Image src={logoWhite} alt="H.man Logo image" width={60} height={60} />
    {children}
  </StyledNav>
);

export { Navbar };
