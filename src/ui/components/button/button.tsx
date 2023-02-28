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
  size = 'md',
  rounded,
  ...props
}: ButtonProps): JSX.Element {
  const classNames = clsx(
    'bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase',
    rounded && 'rounded',
    size === 'sm' && 'text-sm px-1 px-2 min-w-[80px]',
    size === 'md' && 'text-base py-2 px-4 min-w-[100px]',
    size === 'lg' && 'text-lg py-4 px-6 min-w-[150px]',
    className,
  );

  return (
    <button className={classNames} onClick={onClick} type="button" {...props}>
      {children}
    </button>
  );
}
