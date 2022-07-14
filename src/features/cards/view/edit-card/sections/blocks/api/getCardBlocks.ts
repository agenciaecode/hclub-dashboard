import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys, CardType } from '@features/cards';

import { ApiResponse } from '@/types/api-response';

const VIDEO_BLOCK_PROVIDERS = ['youtube', 'vimeo'] as const;
type VideoBlockProvider = typeof VIDEO_BLOCK_PROVIDERS[number];

type VideoBlock = {
  type: 'video';
  config: {
    url: string;
    provider: VideoBlockProvider;
    video_id: string;
  };
};

type ExternalLinkBlock = {
  type: 'external-link';
  config: {
    url: string;
  };
};

type ImageBlock = {
  type: 'image';
  config: {
    id: number;
    url: string;
    width: string;
    height: string;
  };
};

type DownloadBlock = {
  type: 'download';
  config: {
    url: string;
    cover: {
      id: number;
      url: string;
      width: string;
      height: string;
    };
  };
};

type BlockTypes = VideoBlock | ExternalLinkBlock | ImageBlock | DownloadBlock;

type Block<BlockType extends BlockTypes> = BlockType & {
  id: number;
  card_id: number;
  title: string;
  icon_xml_svg: string;
  active: boolean;
  order: number;
  type_label: string;
};

type AnyBlockType = Block<BlockTypes>;

type GetCardBlocksIntput = {
  card: CardType;
};

type GetCardBlocksOutput = AnyBlockType[];

async function getCardBlocks({ card }: GetCardBlocksIntput) {
  const { data } = await http.get<ApiResponse<GetCardBlocksOutput>>(
    `/cards/${card}/blocks`,
  );
  return data;
}

const useGetCardBlocksQuery = (cardBlocksQueryParams: GetCardBlocksIntput) =>
  useQuery(
    CardKeys.showBlocks(cardBlocksQueryParams.card),
    () => getCardBlocks(cardBlocksQueryParams),
    {
      enabled: Boolean(cardBlocksQueryParams.card),
    },
  );

export { useGetCardBlocksQuery, VIDEO_BLOCK_PROVIDERS };
export type {
  GetCardBlocksIntput,
  GetCardBlocksOutput,
  BlockTypes,
  Block,
  AnyBlockType,
  VideoBlockProvider,
  VideoBlock,
  ExternalLinkBlock,
  ImageBlock,
  DownloadBlock,
};
