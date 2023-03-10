// @ts-lint-disable @typescript-eslint/no-unsafe-assignment

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import fetch, { Headers, Request, Response } from 'node-fetch';
import type { PageProps } from '@/types/common/page.type';
import { AppLayout } from '@/components/layouts/app';
import { store, wrapper } from '@/store';
import { PortalProvider, PortalRenderer } from '@/ui/providers/portal';
import { portalsList } from '@/components/modals/portals-list';
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

export function App({ Component, pageProps }: ApplicationType): ReactNode {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);
  return (
    <PortalProvider>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
      <PortalRenderer portalsList={portalsList} />
    </PortalProvider>
  );
}

 
export default wrapper.withRedux(App);
