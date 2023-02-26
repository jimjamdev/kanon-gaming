import type { ReactNode } from 'react';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

export function ModalContent({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const classNames = clsx('bg-white rounded-lg shadow-lg', className);

  return <div className={classNames}>{children}</div>;
}
