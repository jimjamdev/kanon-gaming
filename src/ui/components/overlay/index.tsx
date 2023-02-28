import type { ReactNode } from 'react';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

export function Overlay({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const classNames = clsx(
    'bg-transparent backdrop-blur-sm fixed bottom-0 left-0 top-0 right-0 w-full h-full flex items-center justify-center z-50',
    className,
  );

  return <div className={classNames}>{children}</div>;
}
