import type { ReactNode } from 'react';
import clsx from 'clsx';

export function ContentContainer({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const classNames = clsx('px-4 md:px-5', className);

  return <div className={classNames}>{children}</div>;
}
