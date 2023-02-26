import type {ReactNode} from 'react';

export function ModalHeader({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={[className].join('bg-gray-800 text-white p-4')}>
      {children}
    </div>
  );
}
