/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes } from 'react';

import { Separator } from '@components/data-display/separator';

import { styled } from '@/theme';

const StyledSeparator = styled(Separator, {
  margin: '4rem 0',
});

const StyledSection = styled('section', {
  width: '100%',
});

export const DashboardSection = ({
  children,
  ...sectionProps
}: HTMLAttributes<HTMLElement>) => (
  <>
    <StyledSection {...sectionProps}>{children}</StyledSection>
    <StyledSeparator orientation="horizontal" />
  </>
);
