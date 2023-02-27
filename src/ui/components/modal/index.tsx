import type { ReactNode } from 'react';
import { ModalHeader } from '@/ui/components/modal/modal-header';
import { ModalContent } from '@/ui/components/modal/modal-content';
import { ModalFooter } from '@/ui/components/modal/modal-footer';

export function Modal({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
  portalKey?: string;
}) {
  return (
    <div className={[className].join('bg-white shadow sm:rounded-lg')}>
      {children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
