import clsx from 'clsx';
import Link from 'next/link';
import {
  BanknotesIcon,
  HomeIcon,
  PuzzlePieceIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export function Footer({ className }: { className?: string }) {
  const classNames = clsx('flex w-full md:hidden', className);

  return (
    <footer className={classNames}>
      <div className="flex justify-between w-full bg-white text-white p-4">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            aria-label="Go to the home page"
            className="text-gray-500 hover:text-gray-400"
          >
            <HomeIcon className="w-8 h-8" />
          </a>
        </Link>
        <Link href="/games">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            aria-label="Browse our games"
            className="text-gray-500 hover:text-gray-400"
          >
            <PuzzlePieceIcon className="w-8 h-8" />
          </a>
        </Link>
        <Link href="/promotions">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            aria-label="Win more with our promotions"
            className="text-gray-500 hover:text-gray-400"
          >
            <BanknotesIcon className="w-8 h-8" />
          </a>
        </Link>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            aria-label="Update your user profile"
            className="text-gray-500 hover:text-gray-400"
          >
            <UserCircleIcon className="w-8 h-8" />
          </a>
        </Link>
      </div>
    </footer>
  );
}
