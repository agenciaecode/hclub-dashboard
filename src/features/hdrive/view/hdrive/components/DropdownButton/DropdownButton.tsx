import { ReactElement, ReactNode } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  StyledDropdownArrow,
  StyledDropdownContent,
  StyledDropdownTrigger,
} from './DropdownButton.styles';

type DropdownButtonProps = {
  icon: ReactElement;
  children: ReactNode;
};

const DropdownButton = ({ icon, children }: DropdownButtonProps) => (
  <DropdownMenu.Root>
    <StyledDropdownTrigger>{icon}</StyledDropdownTrigger>
    <StyledDropdownContent>
      {children}
      <StyledDropdownArrow />
    </StyledDropdownContent>
  </DropdownMenu.Root>
);

export { DropdownButton };
