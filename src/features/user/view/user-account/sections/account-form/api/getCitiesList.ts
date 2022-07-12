import { useQuery } from 'react-query';

import { http } from '@services/http/api-client';

import { UserProfile } from '@features/user';

import { Paginated, PaginationParams } from '@/types/paginated';

export const CitiesKeys = {
  all: ['cities'] as const,
  list: (paginationParams: GetCitiesListInput) =>
    [...CitiesKeys.all, 'list', paginationParams] as const,
};

type City = NonNullable<UserProfile['city']>;

type GetCitiesListInput = PaginationParams & {
  state_acronym: string;
};

type GetCitiesListOutput = Paginated<City>;

async function getStatesList({
  page,
  per_page,
  state_acronym,
}: GetCitiesListInput) {
  const { data } = await http.get<GetCitiesListOutput>('/extras/cities', {
    params: { page, per_page, state_acronym },
  });
  return data;
}

const useCitiesListQuery = (statesPaginationParams: GetCitiesListInput) =>
  useQuery(
    CitiesKeys.list({
      per_page: /* Infinity */ 9999, // pick all cities by default
      ...statesPaginationParams,
    }),
    ({ queryKey }) => {
      const [, , paginationParams] = queryKey;
      return getStatesList(paginationParams);
    },
    {
      enabled: statesPaginationParams.state_acronym !== '',
    },
  );

export { useCitiesListQuery };
export type { City, GetCitiesListInput, GetCitiesListOutput };
