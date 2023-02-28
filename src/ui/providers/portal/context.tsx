import type { Consumer, Provider } from 'react';
import { createContext } from 'react';

export interface TPortal {
  [portalKey: string]: any;
  props: any;
}

export interface TPortalContext {
  Provider: Provider<any>;
  Consumer: Consumer<any>;
  portals?: TPortal[];
}

export const PortalContext: TPortalContext = createContext({});
