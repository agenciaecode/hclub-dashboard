/* eslint-disable import/no-cycle, react/jsx-props-no-spreading */
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { notNullish } from '@antfu/utils';
import { arrayMove, List } from 'react-movable';

import { Spinner } from '@components/feedback/spinner';
import { DragSvgIcon } from '@components/icons/drag-icon';
import { EllipsisSvgIcon } from '@components/icons/drag-icon/ellipsis-icon';
import { Flex } from '@components/layout/flex';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { Text } from '@components/typography/text';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { MapToReorderSchema } from '@utils/reorder/map-to-reorder-schema';

import { DropdownWithLock } from '../../components/dropdown-with-lock';
import { EditButton } from '../../components/edit-button';
import { SectionWrapper } from '../../components/section-wrapper';
import { useCardSlug } from '../../hooks/useCardSlug';
import { AddSocialMediaSelect } from './AddSocialMediaSelect';
import {
  SocialMediaItem,
  useCardSocialMediasQuery,
} from './api/getCardSocialMedias';
import { useReorderSocialMediasMutation } from './api/reorderSocialMedias';
import {
  StyledControlsWrapper,
  StyledDragIconContainer,
  StyledMobileDropdownButton,
  StyledSocialMediaIcon,
  StyledSocialMediaItem,
} from './CardSocialMedias.styles';
import { EditSocialMediaModal } from './EditSocialMediaModal';
import {
  ToggleSocialMediaDropdownItem,
  ToggleSocialMedia,
} from './ToggleSocialMedia';

export type WithSocialMediaProp = {
  socialMedia: SocialMediaItem;
};

export const CardSocialMedias = () => {
  const [editingSocialMedia, setEditingSocialMedia] =
    useState<SocialMediaItem>();
  const card = useCardSlug();
  const cardSocialMediasQuery = useCardSocialMediasQuery({ card });
  const reorderSocialMediasMutation = useReorderSocialMediasMutation();
  const [socialMediaItems, setSocialMediaItems] = useState(
    cardSocialMediasQuery.data,
  );

  useEffect(() => {
    setSocialMediaItems(cardSocialMediasQuery.data);
  }, [cardSocialMediasQuery.data]);

  function handleSocialMediaReorder(
    reorderedSocialMediaItems: NonNullable<typeof cardSocialMediasQuery.data>,
  ) {
    reorderSocialMediasMutation.mutate(
      {
        card,
        orderSchema: MapToReorderSchema(reorderedSocialMediaItems),
      },
      {
        onError: () => {
          showToastErrorMessage('Erro ao reordenar redes sociais');
          setSocialMediaItems(cardSocialMediasQuery.data);
          // mutation failed, returning state to previous order
        },
        onSettled: () => reorderSocialMediasMutation.reset(),
      },
    );
  }

  return (
    <SectionWrapper title="Redes sociais">
      {cardSocialMediasQuery.isLoading && <Spinner color="secondary" />}
      {socialMediaItems && (
        <List
          onChange={({ oldIndex, newIndex }) => {
            if (reorderSocialMediasMutation.isLoading) return;
            const reorderedSocialMediaItems = arrayMove(
              socialMediaItems,
              oldIndex,
              newIndex,
            );
            setSocialMediaItems(reorderedSocialMediaItems);
            handleSocialMediaReorder(reorderedSocialMediaItems);
          }}
          values={socialMediaItems}
          renderList={({ children, props }) => (
            <div className="social-medias-wrapper" {...props}>
              {children}
            </div>
          )}
          renderItem={({ value: socialMedia, isDragged, props }) => (
            <div
              {...props}
              key={socialMedia.id}
              {...(reorderSocialMediasMutation.isLoading && {
                style: {
                  pointerEvents: 'none',
                },
              })}
            >
              <StyledSocialMediaItem
                grabbing={isDragged}
                isDisabled={!socialMedia.active}
                isUpdating={reorderSocialMediasMutation.isLoading}
              >
                <Tooltip content="Reordenar">
                  <StyledDragIconContainer>
                    <DragSvgIcon />
                  </StyledDragIconContainer>
                </Tooltip>
                <StyledSocialMediaIcon alignItems="center">
                  {socialMedia.icon.url && (
                    <Image
                      src={socialMedia.icon.url}
                      layout="fill"
                      alt={socialMedia.name}
                    />
                  )}
                </StyledSocialMediaIcon>
                <Flex
                  direction="column"
                  gap="0.8rem"
                  css={{ marginRight: 'auto' }}
                >
                  <Text size="xl">{socialMedia.name}</Text>
                  <Text>@{socialMedia.value}</Text>
                </Flex>
                <StyledControlsWrapper>
                  <EditButton
                    onClick={() => setEditingSocialMedia(socialMedia)}
                  />
                  <ToggleSocialMedia socialMedia={socialMedia} />
                  <MobileDropdownSocialMediasActions
                    socialMedia={socialMedia}
                    setEditingSocialMedia={setEditingSocialMedia}
                  />
                </StyledControlsWrapper>
              </StyledSocialMediaItem>
            </div>
          )}
        />
      )}
      <AddSocialMediaSelect />
      {editingSocialMedia && (
        <EditSocialMediaModal
          socialMedia={editingSocialMedia}
          open={notNullish(editingSocialMedia)}
          onOpenChange={openState => {
            if (!openState) setEditingSocialMedia(undefined);
          }}
          handleSuccessfulSubmit={() => setEditingSocialMedia(undefined)}
        />
      )}
    </SectionWrapper>
  );
};

type MobileDropdownSocialMediasActionsProps = WithSocialMediaProp & {
  setEditingSocialMedia: (socialMedia: SocialMediaItem) => void;
};

const MobileDropdownSocialMediasActions = ({
  socialMedia,
  setEditingSocialMedia,
}: MobileDropdownSocialMediasActionsProps) => (
  <DropdownWithLock
    trigger={
      <StyledMobileDropdownButton btn="secondary" type="button">
        <EllipsisSvgIcon />
      </StyledMobileDropdownButton>
    }
  >
    <DropdownMenuItem onSelect={() => setEditingSocialMedia(socialMedia)}>
      Editar
    </DropdownMenuItem>
    <ToggleSocialMediaDropdownItem socialMedia={socialMedia} />
  </DropdownWithLock>
);
