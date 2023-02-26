import type { ReactNode } from 'react';

export function Overlay({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={[className].join('fixed bg-gray-800 text-white p-4')}>
      {children}
    </div>
  );
}
