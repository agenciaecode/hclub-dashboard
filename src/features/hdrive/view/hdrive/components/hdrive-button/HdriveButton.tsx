import Link from 'next/link';
import { ReactNode } from 'react';

import { StyledHdriveButton } from './HdriveButton.styles';

type NavbarHdriveProps = {
  children: ReactNode;
  text?: 'normal' | 'big';
  href?: string;
};

const HdriveButton = ({ children, text, href }: NavbarHdriveProps) => (
  <Link href={href || '#'} passHref>
    <StyledHdriveButton text={text}>{children}</StyledHdriveButton>
  </Link>
);

HdriveButton.defaultProps = {
  text: 'normal',
  href: null,
};

export { HdriveButton };
