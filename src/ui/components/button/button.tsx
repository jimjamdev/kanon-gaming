// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  onClick?: () => void | Promise<void>;
}

export function Button({
  children,
  className,
  onClick,
  size,
  rounded,
  ...props
}: ButtonProps): JSX.Element {
  const classNames = clsx(
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4',
    rounded && 'rounded',
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-base',
    size === 'lg' && 'text-lg',
    className,
  );

  return (
    <button className={classNames} onClick={onClick} type="button" {...props}>
      {children}
    </button>
  );
}
