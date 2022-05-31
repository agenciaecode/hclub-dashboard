/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps, ReactNode } from 'react';

import {
  StyledFlippableCard,
  StyledFlippableCardBack,
  StyledFlippableCardFront,
  StyledFlippableCardWrapper,
} from './FlippableCard.styles';

type FlippableCardProps = ComponentProps<typeof StyledFlippableCard> & {
  frontContent: ReactNode;
  frontContentProps?: ComponentProps<typeof StyledFlippableCardFront>;
  backContent: ReactNode;
  backContentProps?: ComponentProps<typeof StyledFlippableCardBack>;
};

const FlippableCard = ({
  frontContent,
  frontContentProps,
  backContent,
  backContentProps,
  ...flippableCardProps
}: FlippableCardProps) => (
  <StyledFlippableCardWrapper>
    <StyledFlippableCard {...flippableCardProps}>
      <StyledFlippableCardFront {...frontContentProps}>
        {frontContent}
      </StyledFlippableCardFront>
      <StyledFlippableCardBack {...backContentProps}>
        {backContent}
      </StyledFlippableCardBack>
    </StyledFlippableCard>
  </StyledFlippableCardWrapper>
);

FlippableCard.defaultProps = {
  frontContentProps: undefined,
  backContentProps: undefined,
};

export { FlippableCard };
export type { FlippableCardProps };
