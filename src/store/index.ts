import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gamesApi } from '@/store/games';
import { slotsApi } from '@/store/slots';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    [slotsApi.reducerPath]: slotsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([gamesApi.middleware, slotsApi.middleware]),
});
setupListeners(store.dispatch);
