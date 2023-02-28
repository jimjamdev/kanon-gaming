import type { ComponentType } from 'react';
import { usePortal } from '@/ui/providers/portal/hook';
import type { TPortal } from '@/ui/providers/portal/context';
import { Portal } from '@/ui/components/portal';

export function PortalRenderer({
  portalsList,
}: {
  portalsList: ComponentType;
}) {
  const { portals = [], closePortal } = usePortal();
  return (
    <>
      {portals
        ? portals?.map((portal: TPortal) => {
            const { portalKey = '' } = portal;
            // @ts-expect-error - type
            const PortalComponent = portalsList[portalKey];
            return (
              <Portal isOpen key={portalKey}>
                <PortalComponent {...portal.props} closePortal={closePortal} />
              </Portal>
            );
          })
        : null}
    </>
  );
}
