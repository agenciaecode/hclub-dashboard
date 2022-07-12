import { MouseEventHandler, ReactNode } from 'react';

import { StyledDropdownButtonItem } from './DropdownButtonItem.styles';

type DropdownButtonItemProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
};

const DropdownButtonItem = ({ children, onClick }: DropdownButtonItemProps) => (
  <StyledDropdownButtonItem onClick={onClick}>
    {children}
  </StyledDropdownButtonItem>
);

DropdownButtonItem.defaultProps = {
  onClick: null,
};

export { DropdownButtonItem };
