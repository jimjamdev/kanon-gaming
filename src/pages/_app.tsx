// @ts-lint-disable @typescript-eslint/no-unsafe-assignment

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import fetch, { Headers, Request, Response } from 'node-fetch';
import type { PageProps } from '@/types/common/page.type';
import { AppLayout } from '@/components/layouts/app';
import { wrapper } from '@/store';
// eslint-disable-next-line, @typescript-eslint/no-unsafe-assignment

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

export type ApplicationType = AppProps & {
  Component: PageProps;
};

export function App({ Component, ...rest }: ApplicationType): ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { store, props } = wrapper.useWrappedStore(rest);
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      {getLayout(<Component {...props.pageProps} />)}
    </Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
