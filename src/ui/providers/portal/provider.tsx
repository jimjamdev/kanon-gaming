import type { ReactNode} from 'react';
import { useCallback, useState } from 'react';
import type { TPortal } from './context';
import { PortalContext } from './context';

export function PortalProvider({ children }: { children: ReactNode }) {
  const [portals, setPortals] = useState<TPortal[]>([]);

  const openPortal = useCallback(
    (key: string, props: never) => {
      setPortals((prevPortals) => [...prevPortals, { key, props }]);
    },
    [setPortals]
  );

  const closePortal = useCallback(
    (key: string) => {
      setPortals((prevPortals) =>
        prevPortals.filter((portal) => portal.key !== key)
      );
    },
    [setPortals]
  );

  return (
    <PortalContext.Provider value={{ portals, openPortal, closePortal }}>
      {children}
    </PortalContext.Provider>
  );
}
