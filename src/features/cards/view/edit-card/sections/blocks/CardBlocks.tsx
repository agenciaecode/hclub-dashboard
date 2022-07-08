/* eslint-disable react/jsx-props-no-spreading,import/no-cycle */
import { useEffect, useState } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { arrayMove, List } from 'react-movable';

import { Spinner } from '@components/feedback/spinner';
import { DragSvgIcon } from '@components/icons/drag-icon';
import { EllipsisSvgIcon } from '@components/icons/drag-icon/ellipsis-icon';
import { PencilSvgIcon } from '@components/icons/pencil-icon';
import { Flex } from '@components/layout/flex';
import { Dropdown, DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { Text } from '@components/typography/text';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { MapToReorderSchema } from '@utils/reorder/map-to-reorder-schema';

import { SectionWrapper } from '../../components/section-wrapper';
import { useCardSlug } from '../../hooks/useCardSlug';
import { BlockTypes, useGetCardBlocksQuery } from './api/getCardBlocks';
import { useReorderCardBlocksMutation } from './api/reorderCardBlocks';
import {
  StyledCardBlockIcon,
  StyledCardBlockItem,
  StyledControlsWrapper,
  StyledDragIconContainer,
  StyledIconButton,
  StyledMobileDropdownButton,
} from './CardBlocks.styles';
import {
  DeleteCardBlockButton,
  DeleteteCardDropdownItem,
} from './DeleteCardBlock';
import {
  ToggleCardBlockDropdownItem,
  ToggleCardBlockSwitch,
} from './ToggleCardBlock';

export const CardBlocks = () => {
  const card = useCardSlug();
  const cardBlocksQuery = useGetCardBlocksQuery({ card });
  const reorderCardBlocksMutation = useReorderCardBlocksMutation();
  const [cardBlockItems, setCardBlockItems] = useState(cardBlocksQuery.data);
  const [editingBlock, setEditingBlock] = useState<BlockTypes>();

  useEffect(() => {
    setCardBlockItems(cardBlocksQuery.data);
  }, [cardBlocksQuery.data]);

  function handleCardBlocksReorder(
    reorderedCardBlockItems: NonNullable<typeof cardBlocksQuery.data>,
  ) {
    reorderCardBlocksMutation.mutate(
      {
        card,
        orderSchema: MapToReorderSchema(reorderedCardBlockItems),
      },
      {
        onError: () => {
          showToastErrorMessage('Erro ao reordenar blocos de informação');
          setCardBlockItems(cardBlocksQuery.data);
          // mutation failed, returning state to previous order
        },
        onSettled: () => reorderCardBlocksMutation.reset(),
      },
    );
  }

  return (
    <SectionWrapper title="Outras informações">
      {cardBlocksQuery.isLoading && <Spinner color="secondary" />}
      {cardBlockItems && (
        <List
          onChange={({ oldIndex, newIndex }) => {
            if (reorderCardBlocksMutation.isLoading) return;
            const reorderedSocialMediaItems = arrayMove(
              cardBlockItems,
              oldIndex,
              newIndex,
            );
            setCardBlockItems(reorderedSocialMediaItems);
            handleCardBlocksReorder(reorderedSocialMediaItems);
          }}
          values={cardBlockItems}
          renderList={({ children, props }) => (
            <div className="blocks-wrapper" {...props}>
              {children}
            </div>
          )}
          renderItem={({ value: cardBlock, isDragged, props }) => (
            <div
              {...props}
              key={cardBlock.id}
              {...(reorderCardBlocksMutation.isLoading && {
                style: {
                  pointerEvents: 'none',
                },
              })}
            >
              <StyledCardBlockItem
                grabbing={isDragged}
                isDisabled={!cardBlock.active}
                isUpdating={reorderCardBlocksMutation.isLoading}
              >
                <Tooltip content="Reordenar">
                  <StyledDragIconContainer>
                    <DragSvgIcon />
                  </StyledDragIconContainer>
                </Tooltip>
                <StyledCardBlockIcon
                  alignItems="center"
                  dangerouslySetInnerHTML={{
                    __html: cardBlock.icon_xml_svg,
                  }}
                />
                <Flex
                  direction="column"
                  gap="0.8rem"
                  css={{ marginRight: 'auto' }}
                >
                  <Text size="xl">{cardBlock.type_label}</Text>
                  {cardBlock.title && <Text>{cardBlock.title}</Text>}
                </Flex>
                <StyledControlsWrapper>
                  <Tooltip content="Editar">
                    <StyledIconButton
                      btn="secondary"
                      type="button"
                      onClick={() => setEditingBlock(cardBlock)}
                    >
                      <VisuallyHidden>Editar</VisuallyHidden>
                      <PencilSvgIcon />
                    </StyledIconButton>
                  </Tooltip>
                  <DeleteCardBlockButton cardBlock={cardBlock} />
                  <ToggleCardBlockSwitch cardBlock={cardBlock} />
                  <Dropdown
                    trigger={
                      <StyledMobileDropdownButton btn="secondary" type="button">
                        <EllipsisSvgIcon />
                      </StyledMobileDropdownButton>
                    }
                  >
                    <DropdownMenuItem
                      onSelect={() => setEditingBlock(cardBlock)}
                    >
                      Editar
                    </DropdownMenuItem>
                    <DeleteteCardDropdownItem cardBlock={cardBlock} />
                    <ToggleCardBlockDropdownItem cardBlock={cardBlock} />
                  </Dropdown>
                </StyledControlsWrapper>
              </StyledCardBlockItem>
            </div>
          )}
        />
      )}
    </SectionWrapper>
  );
};
