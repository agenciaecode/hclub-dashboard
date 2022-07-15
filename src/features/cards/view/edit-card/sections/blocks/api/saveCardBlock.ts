import { notNullish } from '@antfu/utils';
import { useMutation, useQueryClient } from 'react-query';

import { ValidationError } from '@libs/http/HttpException';
import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

import type {
  BlockTypes,
  DownloadBlock,
  ExternalLinkBlock,
  ImageBlock,
  VideoBlock,
} from './getCardBlocks';

type OmitBlockTypeConfig<
  BlockType extends BlockTypes,
  OmitedKeys extends keyof BlockType['config'],
> = Pick<BlockType, 'type'> & Omit<BlockType['config'], OmitedKeys>;

type VideoBlockInputs = OmitBlockTypeConfig<VideoBlock, 'video_id'>;

type ExternalLinkBlockInputs = OmitBlockTypeConfig<ExternalLinkBlock, never>;

type ImageBlockInputs = OmitBlockTypeConfig<ImageBlock, 'image'> & {
  image_token?: string; // required only on create
};

type DownloadBlockInputs = OmitBlockTypeConfig<DownloadBlock, 'cover'> & {
  cover_token?: string; // required only on create
};

type BlockTypesInputs =
  | VideoBlockInputs
  | ExternalLinkBlockInputs
  | ImageBlockInputs
  | DownloadBlockInputs;

type CreateBlockInput<BlockTypeInputs extends BlockTypesInputs> = {
  card: CardType;
  title: string;
} & BlockTypeInputs;

type BlockInputsValidationErrors<BlockTypeInputs extends BlockTypesInputs> =
  ValidationError<Omit<CreateBlockInput<BlockTypeInputs>, 'card'>>;

type UpdateBlockInput<BlockTypeInputs extends BlockTypesInputs> =
  CreateBlockInput<BlockTypeInputs> & {
    id: number;
  };

/**
 * Narrow given BlockInputs to UpdateBlockInput type params
 * @param inputs
 */
function isUpdateBlockInputGuard<BlockInputs extends BlockTypesInputs>(
  inputs: BlockInputs,
): inputs is UpdateBlockInput<BlockInputs> {
  return notNullish((<UpdateBlockInput<BlockInputs>>inputs).id);
}

/**
 * Create a new block for given card according to given BlockType.
 * @param UpdateBlockInput<BlockTypeInputs>
 * @throws CreateBlockValidationErrors<BlockTypeInputs extends BlockTypesInputs>
 */
function createCardBlock<BlockTypeInputs extends BlockTypesInputs>({
  card,
  type,
  ...blockFields
}: CreateBlockInput<BlockTypeInputs>) {
  return http.post(`/cards/${card}/blocks/${type}`, blockFields);
}

/**
 * Update given block for given card according to given BlockType.
 * @param UpdateBlockInput<BlockTypeInputs>
 * @throws UpdateBlockValidationErrors<BlockTypeInputs extends BlockTypesInputs>
 */
function updateCardBlock<BlockTypeInputs extends BlockTypesInputs>({
  card,
  type,
  id,
  ...blockFields
}: UpdateBlockInput<BlockTypeInputs>) {
  return http.put(`/cards/${card}/blocks/${type}/${id}`, blockFields);
}

/**
 * Will create a block of given BlockTypesInputs or update it if params contain id.
 */
const useSaveCardBlockMutation = <BlockInputs extends BlockTypesInputs>() => {
  const queryClient = useQueryClient();
  return useMutation(
    (
      cardBlockParams:
        | CreateBlockInput<BlockInputs>
        | UpdateBlockInput<BlockInputs>,
    ) => {
      if (isUpdateBlockInputGuard(cardBlockParams)) {
        return updateCardBlock<BlockInputs>(cardBlockParams);
      }
      return createCardBlock<BlockInputs>(cardBlockParams);
    },
    {
      onSuccess: (_, cardBlockParams) => {
        queryClient.invalidateQueries(
          CardKeys.showBlocks(cardBlockParams.card),
        );
      },
    },
  );
};

export { useSaveCardBlockMutation };
export type {
  VideoBlockInputs,
  ExternalLinkBlockInputs,
  ImageBlockInputs,
  DownloadBlockInputs,
  BlockTypesInputs,
  CreateBlockInput,
  BlockInputsValidationErrors,
  UpdateBlockInput,
};
