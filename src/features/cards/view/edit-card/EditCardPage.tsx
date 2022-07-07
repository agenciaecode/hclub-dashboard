/* eslint-disable import/no-cycle */
import Image from 'next/image';

import { Separator } from '@components/data-display/separator';
import { Button } from '@components/forms/button';
import { PageContent } from '@components/layout/page-content';
import { Link } from '@components/navigator/link';
import { ResponsiveBackButton } from '@components/others/back-button';

import previewImage from './unknown.png';

import {
  FlexWrapper,
  HiddenOnMobile,
  StyledContentWrapper,
  StyledFormsContainer,
  StyledHeader,
  StyledPreviewContainer,
  StyledStickyPreviewWrapper,
  StyledTitle,
  StyledToolbar,
} from './EditCardPage.styles';
import { useCardSlug } from './hooks/useCardSlug';
import { CardBlocks } from './sections/blocks';
import { CardAvatar } from './sections/card-avatar';
import { CardBiography } from './sections/card-bio';
import { CardSocialMedias } from './sections/social-medias';

export const EditCardPage = () => {
  const cardSlug = useCardSlug();
  return (
    <PageContent
      title={`Editar cartão ${cardSlug}`}
      description={`Editar cartão ${cardSlug}`}
    >
      <StyledHeader>
        <FlexWrapper>
          <Link href="/dashboard">
            <ResponsiveBackButton />
          </Link>
          <StyledTitle>Editar informações</StyledTitle>
        </FlexWrapper>
        <StyledToolbar>
          <Button btn="secondary">Visualizar</Button>
          <Button btn="secondary">
            Tornar <HiddenOnMobile> cartão </HiddenOnMobile>padrão
          </Button>
        </StyledToolbar>
      </StyledHeader>
      <StyledContentWrapper>
        <StyledFormsContainer>
          <CardAvatar />
          <Separator />
          <CardBiography />
          <Separator />
          <CardSocialMedias />
          <CardBlocks />
        </StyledFormsContainer>
        <StyledPreviewContainer>
          <StyledStickyPreviewWrapper>
            {/* TODO add component preview */}
            <Image src={previewImage} width={305} height={616} alt="preview" />
          </StyledStickyPreviewWrapper>
        </StyledPreviewContainer>
      </StyledContentWrapper>
    </PageContent>
  );
};
