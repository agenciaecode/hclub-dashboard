import { createContext, useContext, useMemo, useState } from 'react';

import { Dropdown, DropdownProps } from '@components/overlay/dropdown';

const useDropdownControlsProvider = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownLocked, setIsDropdownLocked] = useState(false);
  return useMemo(
    () => ({
      isDropdownOpen,
      isDropdownLocked,
      setIsDropdownOpen,
      openDropdown: () => setIsDropdownOpen(true),
      closeDropdown: () => setIsDropdownOpen(false),
      lockDropdown: () => setIsDropdownLocked(true),
      unlockDropdown: () => setIsDropdownLocked(false),
    }),
    [isDropdownOpen, isDropdownLocked],
  );
};

type DropdownControlsContext = ReturnType<typeof useDropdownControlsProvider>;

const DropdownControlsContext = createContext<
  DropdownControlsContext | undefined
>(undefined);

export const useDropdownControls = () => {
  const dropdownControls = useContext(DropdownControlsContext);
  if (dropdownControls === undefined) {
    throw new Error(
      'useDropdownControlsContext must be used within a DropdownWithLock',
    );
  }
  return dropdownControls;
};

export const DropdownWithLock = ({ trigger, children }: DropdownProps) => {
  const dropdownControls = useDropdownControlsProvider();
  const { isDropdownOpen, isDropdownLocked, setIsDropdownOpen } =
    dropdownControls;

  return (
    <Dropdown
      open={isDropdownOpen}
      onOpenChange={openState => {
        if (isDropdownLocked) return;
        setIsDropdownOpen(openState);
      }}
      trigger={trigger}
    >
      <DropdownControlsContext.Provider value={dropdownControls}>
        {children}
      </DropdownControlsContext.Provider>
    </Dropdown>
  );
};
