 
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

  return <footer className={classNames}>{children}</footer>;
}
