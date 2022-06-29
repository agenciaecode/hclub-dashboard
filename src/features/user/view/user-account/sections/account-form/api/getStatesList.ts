import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { Paginated, PaginationParams } from '@/types/paginated';

export const StatesKeys = {
  all: ['states'] as const,
  list: (paginationParams: GetStatesListInput) =>
    [...StatesKeys.all, 'list', paginationParams] as const,
};

type State = {
  uf: string;
  name: string;
};

type GetStatesListInput = PaginationParams;

type GetStatesListOutput = Paginated<State>;

async function getStatesList({ page, per_page }: GetStatesListInput) {
  const { data } = await http.get<GetStatesListOutput>('/extras/states', {
    params: { page, per_page },
  });
  return data;
}

const useStatesListQuery = (statesPaginationParams: GetStatesListInput = {}) =>
  useQuery(StatesKeys.list(statesPaginationParams), ({ queryKey }) => {
    const [, , paginationParams] = queryKey;
    return getStatesList(paginationParams);
  });

export { useStatesListQuery };
export type { State, GetStatesListInput, GetStatesListOutput };
