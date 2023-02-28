import type { ReactNode } from 'react';
import clsx from 'clsx';

export function ModalContent({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const classNames = clsx('bg-white rounded-lg shadow-lg', className);

  return <main className={classNames}>{children}</main>;
}
