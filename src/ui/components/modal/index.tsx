import type { ReactNode } from 'react';
import clsx from 'clsx';
import { useRef } from 'react';
import { useClickAway } from 'ahooks';
import { ModalHeader } from '@/ui/components/modal/modal-header';
import { ModalContent } from '@/ui/components/modal/modal-content';
import { ModalFooter } from '@/ui/components/modal/modal-footer';
import { usePortal } from '@/ui/providers/portal';

export function Modal({
  className,
  children,
  portalKey,
}: {
  className?: string;
  children?: ReactNode;
  portalKey?: string;
}) {
  const { closePortal } = usePortal();
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(() => {
    closePortal(portalKey);
  }, ref);

  const classNames = clsx(
    'bg-white rounded-lg shadow-lg overflow-hidden min-w-[50vw] max-w-[90vw]',
    className,
  );

  return (
    <aside className={classNames} ref={ref}>
      {children}
    </aside>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
