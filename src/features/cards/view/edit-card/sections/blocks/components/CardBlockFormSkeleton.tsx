import React, { SyntheticEvent } from 'react';

import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { Button } from '@components/forms/button';
import { LoadingButton } from '@components/forms/loading-button';
import { DialogClose, DialogTitle } from '@components/overlay/modal';
import { Text } from '@components/typography/text';
import { animationDelay } from '@utils/animation/animation-delay';

import { styled } from '@/theme';
import { WithChildren } from '@/types/with-children';

import {
  StyledFigure,
  StyledResponsiveFlex,
  StyledResponsiveSocialMediaHeader as StyledResponsiveBlockHeader,
} from '../../social-medias/CardSocialMedias.styles';
import type { AnyBlockType, Block, BlockTypes } from '../api/getCardBlocks';

export type CardBlockFormSkeletonProps = WithChildren<{
  managingBlock: AnyBlockType;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  handleFormSubmit: (event: SyntheticEvent) => Promise<void>;
  handleSuccessfulFormSubmit: () => void;
}>;

export type BlockFormInputsProps<BlockType extends BlockTypes> = Pick<
  CardBlockFormSkeletonProps,
  'handleSuccessfulFormSubmit'
> & {
  managingBlock: Block<BlockType>;
};

export const CardBlockFormSkeleton = ({
  managingBlock,
  isSubmitting,
  isSubmitSuccessful,
  handleFormSubmit,
  handleSuccessfulFormSubmit,
  children,
}: CardBlockFormSkeletonProps) => (
  <>
    <VisuallyHidden asChild>
      <DialogTitle>Adicionar bloco de {managingBlock.type_label}</DialogTitle>
    </VisuallyHidden>
    <form onSubmit={handleFormSubmit}>
      <StyledResponsiveBlockHeader>
        <StyledSvgFigure
          dangerouslySetInnerHTML={{
            __html: managingBlock.icon_xml_svg,
          }}
        />
        <Text size="xl">{managingBlock.type_label}</Text>
      </StyledResponsiveBlockHeader>

      <StyledFormWrapper>{children}</StyledFormWrapper>

      <StyledResponsiveFlex>
        <DialogClose asChild>
          <Button btn="secondary" type="reset">
            Cancelar
          </Button>
        </DialogClose>
        <LoadingButton
          onAnimationFinished={async () => {
            await animationDelay();
            handleSuccessfulFormSubmit();
          }}
          isLoading={isSubmitting}
          isSuccess={isSubmitSuccessful}
        >
          Salvar
        </LoadingButton>
      </StyledResponsiveFlex>
    </form>
  </>
);

const StyledSvgFigure = styled(StyledFigure, {
  '& > svg': { fill: '$gray' },
});

const StyledFormWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  margin: '2rem 0 6rem',
});
