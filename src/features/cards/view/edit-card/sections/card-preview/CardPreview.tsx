/* eslint-disable import/no-cycle */
import { useEffect, useRef, useState } from 'react';

import { throttle } from '@antfu/utils';

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
} from './CardPreview.styles';

const EVENT_MESSAGE_PREVIEW_REFRESH = 'preview-refresh';

export const CardPreview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
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

  function refreshPreview() {
    iframeRef.current?.contentWindow?.postMessage(
      EVENT_MESSAGE_PREVIEW_REFRESH,
      APP_URL.HCLUB_BASE ?? '*',
    );
  }

  useEffect(() => {
    refreshPreview();
  }, [showCardQuery.data, cardSocialMediasQuery.data, cardBlocks.data]);

  if (!user) return null;

  return (
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
      />
      <StyledPhoneNotch />
    </StyledPreviewFrameWrapper>
  );
};
