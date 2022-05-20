/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { CheckMarkSpinner } from '@components/feedback/checkmark-spinner';

import { Button } from '../button';

export type LoadingButtonProps = React.ComponentPropsWithoutRef<
  typeof Button
> & {
  isLoading: boolean;
  isSuccess: boolean;
};

const LoadingButton = React.forwardRef<
  React.ComponentRef<typeof Button>,
  LoadingButtonProps
>(
  (
    { isLoading, isSuccess, children, ...buttonProps }: LoadingButtonProps,
    ref,
  ) => (
    <Button disabled={isLoading} {...buttonProps} ref={ref}>
      {isLoading || isSuccess ? (
        <CheckMarkSpinner finished={isSuccess} />
      ) : (
        children
      )}
    </Button>
  ),
);

LoadingButton.displayName = 'LoadingButton';

export { LoadingButton };
