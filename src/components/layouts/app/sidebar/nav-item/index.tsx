import Link from 'next/link';
import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

export function SidebarNavItem({
  text,
  href,
  exact = true,
}: {
  text: string;
  href: string;
  exact?: boolean;
}) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const classNames = clsx(
    'sidebar-nav block group flex items-center px-2 py-2 text-base font-medium rounded-md text-blue-50 hover:bg-blue-700 hover:text-blue-50',
    {
      'bg-blue-700 text-white': isActive,
    },
  );

  return (
    <div className={classNames}>
      <Link href={href}>{text}</Link>
    </div>
  );
}
