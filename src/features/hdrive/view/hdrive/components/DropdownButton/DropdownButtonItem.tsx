import { ReactNode } from 'react';

import { StyledDropdownButtonItem } from './DropdownButtonItem.styles';

type DropdownButtonItemProps = {
  children: ReactNode;
};

const DropdownButtonItem = ({ children }: DropdownButtonItemProps) => (
  <StyledDropdownButtonItem>{children}</StyledDropdownButtonItem>
);

export { DropdownButtonItem };
