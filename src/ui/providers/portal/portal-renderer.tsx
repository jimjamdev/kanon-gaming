import { Portal } from '@/ui/components/portal';
import { usePortal } from '@/ui/providers/portal/hook';
import type { TPortal } from '.';

export function PortalRenderer() {
  const { portals } = usePortal();
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      {portals.map((portal: TPortal) => (
        <Portal key={portal.key}>{portal.props}</Portal>
      ))}
    </>
  );
}
