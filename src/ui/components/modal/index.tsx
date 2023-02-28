import type { ReactNode } from 'react';
import clsx from 'clsx';
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
  const classNames = clsx(
    'bg-white rounded-lg shadow-lg overflow-hidden min-w-[50vw] max-w-[90vw]',
    className,
  );

  return <aside className={classNames}>{children}</aside>;
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
