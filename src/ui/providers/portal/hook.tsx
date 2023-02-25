// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useContext } from 'react';
import { PortalContext } from './context';

export const usePortal = () => {
  const { portals, openPortal, closePortal } = useContext(PortalContext);
  return { portals, openPortal, closePortal };
};
