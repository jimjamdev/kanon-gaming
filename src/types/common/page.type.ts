import type { NextPage } from 'next';
import type { ComponentType, ReactElement, ReactNode } from 'react';

export type PageProps<P = object> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
