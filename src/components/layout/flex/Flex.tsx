/* eslint-disable prefer-arrow-callback,react/jsx-props-no-spreading, react/require-default-props */
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Property } from '@stitches/react/types/css';

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
    alignItems: {
      center: {
        alignItems: 'center',
      },
    },
  },
});

type FlexProps = ComponentPropsWithoutRef<typeof StyledFlex> & {
  gap?: Property.Gap;
};

export const Flex = forwardRef<ElementRef<typeof StyledFlex>, FlexProps>(
  function Flex({ css, ...flexProps }, forwardedRef) {
    return (
      <StyledFlex
        {...flexProps}
        css={{
          ...css,
          ...(flexProps.gap && { gap: flexProps.gap }),
        }}
        ref={forwardedRef}
      />
    );
  },
);
