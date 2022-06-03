/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes } from 'react';

import { Separator } from '@components/data-display/separator';

import { styled } from '@/theme';

const StyledSeparator = styled(Separator, {
  margin: '4rem 0',
});

export const DashboardSection = ({
  children,
  ...sectionProps
}: HTMLAttributes<HTMLElement>) => (
  <>
    <section {...sectionProps}>{children}</section>
    <StyledSeparator orientation="horizontal" />
  </>
);
