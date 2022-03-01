import { AxiosResponse } from 'axios';
import {
  UseQueryResult,
  QueryObserverResult,
  QueryObserverSuccessResult,
} from 'react-query';

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface ResponseType<T = any> {
  info: Info;
  results: T[];
}

type QueryResultPaginated<T> = (
  ...args: any
) => UseQueryResult<ResponseType<T>, unknown>;

type QueryResult<T> = (...args: any) => UseQueryResult<T, unknown>;

type QueryResultList<T> = (...args: any) => UseQueryResult<T[] | T, unknown>;
