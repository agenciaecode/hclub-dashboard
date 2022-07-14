import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

// eslint-disable-next-line import/no-cycle
import { CardKeys } from '@features/cards';

import { ApiResponse } from '@/types/api-response';

import type { AnyBlockType } from './getCardBlocks';

export type BlockTypeOption = Pick<
  AnyBlockType,
  'type' | 'type_label' | 'icon_xml_svg'
>;

type ListCardBlockTypesOutput = BlockTypeOption[];

async function listCardBlockTypes() {
  const { data } = await http.get<ApiResponse<ListCardBlockTypesOutput>>(
    `/blocks`,
  );
  return data;
}

const useListCardBlockTypesQuery = () =>
  useQuery(CardKeys.listBlocks(), listCardBlockTypes);

export { useListCardBlockTypesQuery };
export type { ListCardBlockTypesOutput };
