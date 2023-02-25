import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { baseApi } from '@/store/api/base-api';
import { gamesApi } from '@/store/api/games';

// eslint-disable-next-line import/no-mutable-exports
let store: ReturnType<typeof configStore>;

const configStore = () =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      [gamesApi.reducerPath]: gamesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

export const makeStore = () => {
  store = configStore();
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(makeStore().dispatch);

/* We export store to be able to use it in tests, and functions */
export { store };

export const wrapper = createWrapper<AppStore>(makeStore, { debug: process.env.NODE_ENV === 'development' });
