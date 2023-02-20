import type { Slots } from '@/types/slots.types';
import { baseApi } from '@/store/api/base-api';

export const slotsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSlots: build.query<Slots, void>({
      query: () => `slots`,
      providesTags: ['api'],
    }),
  }),
});

export const {
  useGetSlotsQuery,
  util: { getRunningQueriesThunk },
} = slotsApi;
export const { getSlots } = slotsApi.endpoints;
