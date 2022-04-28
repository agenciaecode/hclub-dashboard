/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';

import Image from 'next/image';

import { StyledNav } from './Navbar.styles';

import logoWhite from '@assets/images/logo-hman-white.svg';

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
