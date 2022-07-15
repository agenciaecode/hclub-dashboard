/* eslint-disable prefer-arrow-callback,react/jsx-props-no-spreading, react/require-default-props */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { styled } from '@/theme';

export const StyledFlex = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    justifyContent: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
    },
    gap: {
      '0.8': {
        gap: '0.8rem',
      },
      2: {
        gap: '2rem',
      },
      '3.2': {
        gap: '3.2rem',
      },
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
    },
  },
});

type FlexProps = ComponentPropsWithoutRef<typeof StyledFlex>;

export const Flex = forwardRef<ElementRef<typeof StyledFlex>, FlexProps>(
  function Flex(flexProps, forwardedRef) {
    return <StyledFlex {...flexProps} ref={forwardedRef} />;
  },
);
