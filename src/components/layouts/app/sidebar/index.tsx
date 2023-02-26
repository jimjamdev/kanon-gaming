import Link from 'next/link';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

export function Sidebar({ className }: { className?: string }) {
  const classNames = clsx('relative md:w-48', className);

  return (
    <aside className={classNames}>
      <nav className="fixed">
        <Link href="/">Home</Link>
        <Link href="/game">Games</Link>
      </nav>
    </aside>
  );
}
