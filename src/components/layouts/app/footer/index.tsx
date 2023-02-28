import clsx from 'clsx';
import Link from 'next/link';

export function Footer({ className }: { className?: string }) {
  const classNames = clsx('flex w-full md:hidden', className);

  return (
    <footer className={classNames}>
      <div className="w-full bg-white text-white p-4">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="text-gray-500">Home</a>
        </Link>
      </div>
    </footer>
  );
}
