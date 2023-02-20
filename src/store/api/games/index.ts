import { baseApi } from '@/store/api/base-api';
import type { Games } from '@/types/games.types';

export const gamesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<Games, void>({
      query: () => `games`,
      providesTags: ['api'],
    }),
  }),
});

export const {
  useGetGamesQuery,
  util: { getRunningQueriesThunk },
} = gamesApi;
export const { getGames } = gamesApi.endpoints;
