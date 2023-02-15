import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { config } from '@/config';

export const slotsApi = createApi({
  reducerPath: 'slots',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (builder) => ({
    getSlots: builder.query<string[], void>({
      query: () => `slots`,
    }),
  }),
});

export const { useGetSlotsQuery } = slotsApi;
