import type { ReactNode } from 'react';
import clsx from 'clsx';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { usePortal } from '@/ui/providers/portal';

export function ModalHeader({
  className,
  children,
  portalKey,
}: {
  className?: string;
  children?: ReactNode;
  portalKey?: string;
}) {
  const { closePortal } = usePortal();
  const classNames = clsx('bg-white text-white p-4', className);
  return (
    <header className={classNames}>
      <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            {children}
          </h3>
        </div>

        <button
          className="text-gray-500 hover:text-gray-400"
          onClick={() => closePortal(portalKey)}
          type="button"
        >
          <XCircleIcon className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}
