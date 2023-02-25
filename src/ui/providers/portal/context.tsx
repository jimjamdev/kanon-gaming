// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */

import type {Consumer, Provider} from "react";
import { createContext} from "react";

export interface TPortal {
  key: string;
  props: any;
}

export interface TPortalContext {
  Provider: Provider<any>;
  Consumer: Consumer<any>;
  portals?: TPortal[];
}


export const PortalContext: TPortalContext = createContext({});
