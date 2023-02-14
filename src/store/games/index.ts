import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { Games } from '@/types/games.types';

export const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost3000/api/' }),
  endpoints: (builder) => ({
    getGames: builder.query<Games, unknown>({
      query: () => `games`,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
