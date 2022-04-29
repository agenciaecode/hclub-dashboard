/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';

import { styled } from '@/theme';

const StyledButton = styled('button', {});

export const BackButton = (
  backButtonProps: ComponentProps<typeof StyledButton>,
) => (
  <StyledButton type="button" {...backButtonProps}>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 32.5L12.5 20L25 7.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyledButton>
);
