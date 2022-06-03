/* eslint-disable react/jsx-props-no-spreading */
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from 'react';

import {
  StyledCardContainerArticle,
  StyledCardContainerHeader,
  StyledCardListContainer,
} from './CardContainer.styles';

export type CardContainerProps = {
  title: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<typeof StyledCardContainerArticle>;

export const CardContainer = forwardRef<
  ElementRef<typeof StyledCardContainerArticle>,
  CardContainerProps
  // eslint-disable-next-line prefer-arrow-callback
>(function CardContainer(
  { title, children, ...cardContainerProps },
  forwardedRef,
) {
  return (
    <StyledCardContainerArticle {...cardContainerProps} ref={forwardedRef}>
      <StyledCardContainerHeader>{title}</StyledCardContainerHeader>
      <StyledCardListContainer>{children}</StyledCardListContainer>
    </StyledCardContainerArticle>
  );
});
