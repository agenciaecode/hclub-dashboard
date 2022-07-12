import { ReactElement, ReactNode } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  StyledDropdownArrow,
  StyledDropdownContent,
  StyledDropdownTrigger,
} from './DropdownButton.styles';

type DropdownButtonProps = {
  icon: string | ReactElement;
  children: ReactNode;
  size?: 'large' | undefined;
};

const DropdownButton = ({ icon, children, size }: DropdownButtonProps) => (
  <DropdownMenu.Root>
    <StyledDropdownTrigger size={size}>{icon}</StyledDropdownTrigger>
    <StyledDropdownContent>
      {children}
      <StyledDropdownArrow />
    </StyledDropdownContent>
  </DropdownMenu.Root>
);

DropdownButton.defaultProps = {
  size: undefined,
};

export { DropdownButton };
