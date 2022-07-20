/* eslint-disable import/no-cycle */
import { Separator } from '@components/data-display/separator';
import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { Flex } from '@components/layout/flex';
import { PageContent } from '@components/layout/page-content';
import { Link } from '@components/navigator/link';
import { ResponsiveBackButton } from '@components/others/back-button';
import { useAuthUser } from '@hooks/useAuthUser';

import { getUserCardUrl } from '@/constants/APP_URL';

import {
  FlexWrapper,
  StyledContentWrapper,
  StyledFormsContainer,
  StyledHeader,
  StyledPreviewContainer,
  StyledTitle,
  StyledToolbar,
} from './EditCardPage.styles';
import { useCardSlug } from './hooks/useCardSlug';
import { CardBlocks } from './sections/blocks';
import { CardAvatar } from './sections/card-avatar';
import { CardBiography } from './sections/card-bio';
import { CardPreview } from './sections/card-preview';
import { SetCardAsDefaultButton } from './sections/set-card-as-default';
import { CardSocialMedias } from './sections/social-medias';
// import { ToggleDarkTheme } from './sections/toggle-dark-theme';
import { ToggleCardNewsletter } from './sections/toggle-newsletter';

export const EditCardPage = () => {
  const { user } = useAuthUser();
  const cardSlug = useCardSlug();
  return (
    <PageContent
      title={`Editar cartão ${cardSlug}`}
      description={`Editar cartão ${cardSlug}`}
    >
      {user ? (
        <>
          <StyledHeader>
            <FlexWrapper>
              <Link href="/dashboard">
                <ResponsiveBackButton />
              </Link>
              <StyledTitle>Editar informações</StyledTitle>
            </FlexWrapper>
            <StyledToolbar>
              <Flex justifyContent="center" gap="1-6" flexWrap>
                <Link
                  href={getUserCardUrl(user.username, cardSlug)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button btn="secondary">Visualizar</Button>
                </Link>
                <SetCardAsDefaultButton />
              </Flex>
            </StyledToolbar>
          </StyledHeader>
          <StyledContentWrapper>
            <StyledFormsContainer>
              <CardAvatar />
              <Separator />
              <CardBiography />
              <Separator />
              {/* <ToggleDarkTheme /> */}
              {/* <Separator /> */}
              <ToggleCardNewsletter />
              <Separator />
              <CardSocialMedias />
              <CardBlocks />
            </StyledFormsContainer>
            <StyledPreviewContainer>
              <CardPreview />
            </StyledPreviewContainer>
          </StyledContentWrapper>
        </>
      ) : (
        <Spinner color="secondary" />
      )}
    </PageContent>
  );
};
