/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';

import { CheckMarkSpinner } from '@components/feedback/checkmark-spinner';

import { Button } from '../button';

export type LoadingButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  isLoading: boolean;
  isSuccess: boolean;
};

const LoadingButton = forwardRef<
  ElementRef<typeof Button>,
  LoadingButtonProps
  // eslint-disable-next-line react/prop-types
>(({ isLoading, isSuccess, children, ...buttonProps }, forwardedRef) => (
  <Button disabled={isLoading} {...buttonProps} ref={forwardedRef}>
    {isLoading || isSuccess ? (
      <CheckMarkSpinner finished={isSuccess} />
    ) : (
      children
    )}
  </Button>
));

LoadingButton.displayName = 'LoadingButton';

export { LoadingButton };
