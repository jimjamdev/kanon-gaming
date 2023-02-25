// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

import { Portal } from '@/ui/components/portal';
import { usePortal } from '@/ui/providers/portal/hook';
import type { TPortal} from '.';

export function PortalRenderer() {
  const { portals } = usePortal();
  return (
    <>
      {portals.map((portal: TPortal) => (
        <Portal key={portal.key}>
          {portal.props}
        </Portal>
      ))}
    </>
  );
}
