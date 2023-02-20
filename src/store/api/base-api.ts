import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import type { ErrorType } from '@/types/common/error.types';
import { config } from '@/config';

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['api'],
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
  }) as BaseQueryFn<string | FetchArgs, unknown, ErrorType>,

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
