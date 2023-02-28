import type { ReactNode } from 'react';
import clsx from 'clsx';
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

        <button onClick={() => closePortal(portalKey)} type="button">
          <svg
            className="fill-gray-700 w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
