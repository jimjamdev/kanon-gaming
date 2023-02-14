import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { Games } from '@/types/games.types';
import { config } from '@/config';

export const slotsApi = createApi({
  reducerPath: 'slots',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (builder) => ({
    getSlots: builder.query<Games, void>({
      query: () => `slots`,
    }),
  }),
});

export const { useGetSlotsQuery } = slotsApi;
