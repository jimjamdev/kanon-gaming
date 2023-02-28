import { baseApi } from '@/store/api/base-api';
import type { Game, Games } from '@/types/games.types';

export const gamesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<Games, void>({
      query: () => `games`,
      providesTags: ['api'],
    }),
    getGame: build.query<Game, { slug?: string }>({
      query: ({ slug }) => `games?slug=${slug || ''}`,
      providesTags: ['api'],
      transformResponse: (response: any) => response[0],
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = gamesApi;
export const { getGames, getGame } = gamesApi.endpoints;
