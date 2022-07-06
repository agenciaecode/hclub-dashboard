/* eslint-disable import/no-cycle, react/jsx-props-no-spreading */
import Image from 'next/image';
import { forwardRef, SVGProps, useEffect, useState } from 'react';

import { notNullish } from '@antfu/utils';
import { arrayMove, List } from 'react-movable';

import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { Flex } from '@components/layout/flex';
import { Dropdown, DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { Text } from '@components/typography/text';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';

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
  ToggleSocialMediaSwitch,
} from './ToggleSocialMediaSwitch';

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
        orderSchema: reorderedSocialMediaItems.map(
          (socialMediaItem, order) => ({
            id: socialMediaItem.id,
            order: order + 1,
          }),
        ),
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
                  <Button
                    btn="secondary"
                    type="button"
                    onClick={() => setEditingSocialMedia(socialMedia)}
                  >
                    Editar
                  </Button>
                  <ToggleSocialMediaSwitch socialMedia={socialMedia} />
                  <Dropdown
                    trigger={
                      <StyledMobileDropdownButton btn="secondary" type="button">
                        <EllipsisSvgIcon />
                      </StyledMobileDropdownButton>
                    }
                  >
                    <DropdownMenuItem
                      onSelect={() => setEditingSocialMedia(socialMedia)}
                    >
                      Editar
                    </DropdownMenuItem>
                    <ToggleSocialMediaDropdownItem socialMedia={socialMedia} />
                  </Dropdown>
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

const DragSvgIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.875 9.375H3.125C2.95924 9.375 2.80027 9.44085 2.68306 9.55806C2.56585 9.67527 2.5 9.83424 2.5 10C2.5 10.1658 2.56585 10.3247 2.68306 10.4419C2.80027 10.5592 2.95924 10.625 3.125 10.625H16.875C17.0408 10.625 17.1997 10.5592 17.3169 10.4419C17.4342 10.3247 17.5 10.1658 17.5 10C17.5 9.83424 17.4342 9.67527 17.3169 9.55806C17.1997 9.44085 17.0408 9.375 16.875 9.375Z"
      fill="black"
    />
    <path
      d="M3.125 5.625H16.875C17.0408 5.625 17.1997 5.55915 17.3169 5.44194C17.4342 5.32473 17.5 5.16576 17.5 5C17.5 4.83424 17.4342 4.67527 17.3169 4.55806C17.1997 4.44085 17.0408 4.375 16.875 4.375H3.125C2.95924 4.375 2.80027 4.44085 2.68306 4.55806C2.56585 4.67527 2.5 4.83424 2.5 5C2.5 5.16576 2.56585 5.32473 2.68306 5.44194C2.80027 5.55915 2.95924 5.625 3.125 5.625Z"
      fill="black"
    />
    <path
      d="M16.875 14.375H3.125C2.95924 14.375 2.80027 14.4408 2.68306 14.5581C2.56585 14.6753 2.5 14.8342 2.5 15C2.5 15.1658 2.56585 15.3247 2.68306 15.4419C2.80027 15.5592 2.95924 15.625 3.125 15.625H16.875C17.0408 15.625 17.1997 15.5592 17.3169 15.4419C17.4342 15.3247 17.5 15.1658 17.5 15C17.5 14.8342 17.4342 14.6753 17.3169 14.5581C17.1997 14.4408 17.0408 14.375 16.875 14.375Z"
      fill="black"
    />
  </svg>
);

export const EllipsisSvgIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
  // eslint-disable-next-line prefer-arrow-callback
>(function CardContainer(svgProps, forwardedRef) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      ref={forwardedRef}
    >
      <path
        d="M4.16667 8.33325C3.25 8.33325 2.5 9.08325 2.5 9.99992C2.5 10.9166 3.25 11.6666 4.16667 11.6666C5.08333 11.6666 5.83333 10.9166 5.83333 9.99992C5.83333 9.08325 5.08333 8.33325 4.16667 8.33325Z"
        fill="black"
      />
      <path
        d="M15.8334 8.33325C14.9167 8.33325 14.1667 9.08325 14.1667 9.99992C14.1667 10.9166 14.9167 11.6666 15.8334 11.6666C16.7501 11.6666 17.5001 10.9166 17.5001 9.99992C17.5001 9.08325 16.7501 8.33325 15.8334 8.33325Z"
        fill="black"
      />
      <path
        d="M9.99992 8.33325C9.08325 8.33325 8.33325 9.08325 8.33325 9.99992C8.33325 10.9166 9.08325 11.6666 9.99992 11.6666C10.9166 11.6666 11.6666 10.9166 11.6666 9.99992C11.6666 9.08325 10.9166 8.33325 9.99992 8.33325Z"
        fill="black"
      />
    </svg>
  );
});
