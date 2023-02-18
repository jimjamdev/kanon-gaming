import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { config } from '@/config';
import type { Slots } from '@/types/slots.types';

export const slotsApi = createApi({
  reducerPath: 'slots',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (builder) => ({
    getSlots: builder.query<Slots, void>({
      query: () => `slots`,
    }),
  }),
});

export const { useGetSlotsQuery } = slotsApi;
