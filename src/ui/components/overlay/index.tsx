import type { ReactNode } from 'react';
import clsx from 'clsx';
import { useEffect } from 'react';

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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return <div className={classNames}>{children}</div>;
}
