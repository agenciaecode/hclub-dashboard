/* eslint-disable react/jsx-props-no-spreading,react/prop-types */

import { forwardRef } from 'react';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';

import { CheckMarkSpinner } from '@components/feedback/checkmark-spinner';

import { Button } from '../button';

export type LoadingButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  isLoading: boolean;
  isSuccess: boolean;
  onAnimationFinished?: () => void;
};

const LoadingButton = forwardRef<ElementRef<typeof Button>, LoadingButtonProps>(
  (
    { isLoading, isSuccess, onAnimationFinished, children, ...buttonProps },
    forwardedRef,
  ) => (
    <Button disabled={isLoading} {...buttonProps} ref={forwardedRef}>
      {isLoading || isSuccess ? (
        <CheckMarkSpinner
          finished={isSuccess}
          onAnimationFinish={onAnimationFinished}
          color={buttonProps.btn}
        />
      ) : (
        children
      )}
    </Button>
  ),
);

LoadingButton.displayName = 'LoadingButton';

LoadingButton.defaultProps = {
  onAnimationFinished: undefined,
};

export { LoadingButton };
