import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';
import type { TPortal } from '@/ui/providers/portal/context';
import { PortalContext } from '@/ui/providers/portal/context';

export function PortalProvider({ children }: { children: ReactNode }) {
  const [portals, setPortals] = useState<TPortal[]>([]);

  const openPortal = useCallback(
    (portalKey: string, props: any) => {
      if (!portals.find((portal) => portal.portalKey === portalKey)) {
        setPortals((prevPortals) => [
          ...prevPortals,
          { portalKey, props: { portalKey, ...props } },
        ]);
      }
    },
    [portals, setPortals],
  );

  const closePortal = useCallback(
    (portalKey: string) => {
      setPortals((prevPortals) =>
        prevPortals.filter((portal) => portal.portalKey !== portalKey),
      );
    },
    [setPortals],
  );

  return (
    <PortalContext.Provider value={{ portals, openPortal, closePortal }}>
      {children}
    </PortalContext.Provider>
  );
}
