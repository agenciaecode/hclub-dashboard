import React from 'react';

import { DialogCloseProps } from '@radix-ui/react-dialog';

import { StyledCloseButton } from './ModalCloseButton.styles';

const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  DialogCloseProps
  // eslint-disable-next-line prefer-arrow-callback
>(function CloseButton(closeButtonProps, reference) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledCloseButton ref={reference} btn="secondary" {...closeButtonProps}>
      <svg
        width="16"
        height="16"
        // viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 3.5L3.5 12.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 12.5L3.5 3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledCloseButton>
  );
});

export { ModalCloseButton };
