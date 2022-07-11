import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { EllipsisSvgIcon } from '@components/icons/drag-icon/ellipsis-icon';

import { styled } from '@/theme';

import { IconButton } from '../icon-button';

const StyledMobileDropdownButton = styled(IconButton, {
  display: 'block !important',
  '@sm': {
    display: 'none !important',
  },
});

type StyledButtonType = typeof StyledMobileDropdownButton;

export const MobileDropdownButton = forwardRef<
  ElementRef<StyledButtonType>,
  ComponentPropsWithoutRef<StyledButtonType>
  // eslint-disable-next-line prefer-arrow-callback
>(function MobileDropdownButton(buttonProps, forwardedRef) {
  return (
    <StyledMobileDropdownButton
      btn="secondary"
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      ref={forwardedRef}
    >
      <VisuallyHidden>Mostrar opções</VisuallyHidden>
      <EllipsisSvgIcon />
    </StyledMobileDropdownButton>
  );
});
