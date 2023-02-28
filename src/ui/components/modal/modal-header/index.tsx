import type { ReactNode } from 'react';
import { usePortal } from '@/ui/providers/portal';

export function ModalHeader({
  className,
  children,
  portalKey,
}: {
  className?: string;
  children?: ReactNode;
  portalKey?: string;
}) {
  const { closePortal } = usePortal();
  return (
    <header className={[className].join('bg-gray-800 text-white p-4')}>
      <button onClick={() => closePortal(portalKey)} type="button">
        close
      </button>
      {children}
    </header>
  );
}
