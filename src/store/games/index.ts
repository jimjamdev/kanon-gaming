import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { Games } from '@/types/games.types';
import { config } from '@/config';

export const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (builder) => ({
    getGames: builder.query<Games, void>({
      query: () => `games`,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
export const { getGames } = gamesApi.endpoints;
