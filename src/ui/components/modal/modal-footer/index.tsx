// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import type { ReactNode } from 'react';

export function ModalFooter({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const classNames = clsx('flex justify-end', className);

  return <div className={classNames}>{children}</div>;
}