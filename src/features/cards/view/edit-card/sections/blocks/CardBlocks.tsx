/* eslint-disable react/jsx-props-no-spreading,import/no-cycle */
import { useCallback, useEffect, useState } from 'react';

import { arrayMove, List } from 'react-movable';

import { Spinner } from '@components/feedback/spinner';
import { DragSvgIcon } from '@components/icons/drag-icon';
import { Flex } from '@components/layout/flex';
import { DropdownMenuItem } from '@components/overlay/dropdown';
import { Tooltip } from '@components/overlay/tooltip';
import { Text } from '@components/typography/text';
import { showToastErrorMessage } from '@libs/toast/showToastMessage';
import { MapToReorderSchema } from '@utils/reorder/map-to-reorder-schema';

import { DeleteButton } from '../../components/delete-button';
import { DropdownWithLock } from '../../components/dropdown-with-lock';
import { EditButton } from '../../components/edit-button/EditButton';
import { MobileDropdownButton } from '../../components/ellipsis-button';
import { SectionWrapper } from '../../components/section-wrapper';
import { useCardSlug } from '../../hooks/useCardSlug';
import { Block, BlockTypes, useGetCardBlocksQuery } from './api/getCardBlocks';
import { useReorderCardBlocksMutation } from './api/reorderCardBlocks';
import {
  StyledCardBlockIcon,
  StyledCardBlockItem,
  StyledControlsWrapper,
  StyledDragIconContainer,
} from './CardBlocks.styles';
import { DeleteCardBlockConfirmationAlert } from './DeleteCardBlock';
import {
  ToggleCardBlockDropdownItem,
  ToggleCardBlockSwitch,
} from './ToggleCardBlock';

export type WithCardBlockProp = {
  cardBlock: Block<BlockTypes>;
};

export const CardBlocks = () => {
  const card = useCardSlug();
  const cardBlocksQuery = useGetCardBlocksQuery({ card });
  const reorderCardBlocksMutation = useReorderCardBlocksMutation();
  const [cardBlockItems, setCardBlockItems] = useState(cardBlocksQuery.data);
  const [editingBlock, setEditingBlock] = useState<Block<BlockTypes>>();
  const [deletingBlock, setDeletingBlock] = useState<Block<BlockTypes>>();

  const closeDeleteBlockAlert = useCallback(
    () => setDeletingBlock(undefined),
    [],
  );

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
                  <EditButton onClick={() => setEditingBlock(cardBlock)} />
                  <DeleteButton onClick={() => setDeletingBlock(cardBlock)} />
                  <ToggleCardBlockSwitch cardBlock={cardBlock} />
                  <DropdownWithLock trigger={<MobileDropdownButton />}>
                    <DropdownMenuItem
                      onSelect={() => setEditingBlock(cardBlock)}
                    >
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => setDeletingBlock(cardBlock)}
                    >
                      Excluir
                    </DropdownMenuItem>
                    <ToggleCardBlockDropdownItem cardBlock={cardBlock} />
                  </DropdownWithLock>
                </StyledControlsWrapper>
              </StyledCardBlockItem>
            </div>
          )}
        />
      )}
      {deletingBlock && (
        <DeleteCardBlockConfirmationAlert
          cardBlock={deletingBlock}
          closeAlert={closeDeleteBlockAlert}
        />
      )}
    </SectionWrapper>
  );
};
