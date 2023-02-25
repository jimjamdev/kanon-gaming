// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void | Promise<void>;
}

export function Button({
  children,
  className,
  onClick,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        className,
      )}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
