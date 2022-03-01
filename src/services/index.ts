import http from 'src/utils/http';
import { useQuery } from 'react-query';
import { ICharacter, IEpisode, ILocation } from 'src/lib/interfaces';
import { QueryResult, QueryResultList, QueryResultPaginated } from 'global';

const useQueryCharactersPaginated: QueryResultPaginated<ICharacter> = (
  page: number
) =>
  useQuery(
    ['charactersPage', page],
    () => http.get(`/character/?page=${page}`),
    {
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
