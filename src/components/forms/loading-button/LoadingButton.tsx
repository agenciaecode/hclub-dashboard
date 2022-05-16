/* eslint-disable react/jsx-props-no-spreading */
import { CheckMarkSpinner } from '@components/feedback/checkmark-spinner';

import { Button } from '../button';

export type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  isLoading: boolean;
  isSuccess: boolean;
};

export const LoadingButton = ({
  isLoading,
  isSuccess,
  children,
  ...buttonProps
}: LoadingButtonProps) => (
  <Button disabled={isLoading} {...buttonProps}>
    {isLoading || isSuccess ? (
      <CheckMarkSpinner finished={isSuccess} />
    ) : (
      children
    )}
  </Button>
);
