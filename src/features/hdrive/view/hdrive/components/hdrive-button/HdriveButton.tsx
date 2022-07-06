import { ReactNode } from 'react';

import { StyledHdriveButton } from './HdriveButton.styles';

type NavbarHdriveProps = {
  children: ReactNode;
  text?: 'normal' | 'big';
};

const HdriveButton = ({ children, text }: NavbarHdriveProps) => (
  <StyledHdriveButton text={text}>{children}</StyledHdriveButton>
);

HdriveButton.defaultProps = {
  text: 'normal',
};

export { HdriveButton };
