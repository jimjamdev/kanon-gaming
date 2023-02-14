import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { PageProps } from '@/types/common/page.type';
import { AppLayout } from '@/components/layouts/app';
import { store } from '@/store/iindex';

export type ApplicationType = AppProps & {
  Component: PageProps;
};

// eslint-disable-next-line import/no-default-export
export default function App({
  Component,
  pageProps,
}: ApplicationType): ReactNode {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
