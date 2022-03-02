import http from 'src/utils/http';
import { useQuery, useInfiniteQuery } from 'react-query';
import { ICharacter, IEpisode, ILocation } from 'src/lib/interfaces';
import { QueryResult, QueryResultList, QueryResultPaginated } from 'global';

const useQueryCharactersPaginated: QueryResultPaginated<ICharacter> = () =>
  useInfiniteQuery(
    'characters',
    ({ pageParam = 1 }) => http.get(`/character/?page=${pageParam}`),
    {
      getNextPageParam: (lastPage: any) =>
        lastPage?.info?.next?.split('page=')[1],
      keepPreviousData: true,
    }
  );

const useQueryCharacter: QueryResult<ICharacter> = (characterId: number) =>
  useQuery(
    ['character', characterId],
    () => http.get(`/character/${characterId}`),
    {
      enabled: !!characterId,
    }
  );

const useQueryEpisodeList: QueryResultList<IEpisode> = (
  episodeIds: string | null
) =>
  useQuery(
    ['episodeList', episodeIds],
    () => http.get(`/episode/${episodeIds}`),
    { enabled: !!episodeIds }
  );

const useQueryLocation: QueryResult<ILocation> = (locationId: number) =>
  useQuery(
    ['location', locationId],
    () => http.get(`/location/${locationId}`),
    { enabled: !!locationId }
  );

export {
  useQueryCharactersPaginated,
  useQueryCharacter,
  useQueryEpisodeList,
  useQueryLocation,
};
