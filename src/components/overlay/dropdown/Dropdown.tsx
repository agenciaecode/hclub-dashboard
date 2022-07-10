/* eslint-disable react/jsx-props-no-spreading,react/require-default-props */
import type { ComponentProps, ReactElement } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DropdownMenuContent } from './PrimitiveDropdown';

export type DropdownProps = ComponentProps<typeof DropdownMenu.Root> & {
  trigger: ReactElement;
};

export const Dropdown = ({
  trigger,
  children,
  ...dropdownProps
}: DropdownProps) => (
  <DropdownMenu.Root {...dropdownProps}>
    <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
    <DropdownMenuContent sideOffset={15}>{children}</DropdownMenuContent>
  </DropdownMenu.Root>
);
