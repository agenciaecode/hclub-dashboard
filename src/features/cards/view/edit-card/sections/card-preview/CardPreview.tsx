/* eslint-disable import/no-cycle */
import { useCallback, useEffect, useRef, useState } from 'react';

import { useAuthUser } from '@hooks/useAuthUser';

import { APP_URL, getUserCardUrl } from '@/constants/APP_URL';

import previewFrame from './assets/image/simple-frame.svg';

import { useShowCardQuery } from '../../api/showCard';
import { useCardSlug } from '../../hooks/useCardSlug';
import { useGetCardBlocksQuery } from '../blocks/api/getCardBlocks';
import { useCardSocialMediasQuery } from '../social-medias/api/getCardSocialMedias';
import {
  StyledPreviewPhoneFrame,
  StyledPreviewFrameWrapper,
  StyledPreviewIFrame,
  StyledPhoneNotch,
  StyledStickyPreviewWrapper,
} from './CardPreview.styles';

const EVENT_MESSAGE_PREVIEW_REFRESH = 'preview-refresh';

export const CardPreview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isIFrameLoaded, setIsIFrameLoaded] = useState(false);
  const card = useCardSlug();
  const { user } = useAuthUser();
  const showCardQuery = useShowCardQuery({
    card,
  });
  const cardSocialMediasQuery = useCardSocialMediasQuery({
    card,
  });
  const cardBlocks = useGetCardBlocksQuery({
    card,
  });

  const refreshPreview = useCallback(() => {
    if (isIFrameLoaded) {
      iframeRef.current?.contentWindow?.postMessage(
        EVENT_MESSAGE_PREVIEW_REFRESH,
        APP_URL.HCLUB_BASE ?? '*',
      );
    }
  }, [isIFrameLoaded, iframeRef]);

  useEffect(() => {
    refreshPreview();
  }, [
    showCardQuery.data,
    cardSocialMediasQuery.data,
    cardBlocks.data,
    refreshPreview,
  ]);

  if (!user) return null;

  return (
    <StyledStickyPreviewWrapper>
      <StyledPreviewFrameWrapper>
        <StyledPreviewPhoneFrame
          src={previewFrame}
          layout="fill"
          alt="phone frame"
          priority
        />
        <StyledPreviewIFrame
          ref={iframeRef}
          src={getUserCardUrl(user.username, card)}
          onLoad={() => setIsIFrameLoaded(true)}
        />
        <StyledPhoneNotch />
      </StyledPreviewFrameWrapper>
    </StyledStickyPreviewWrapper>
  );
};
