// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { SidebarNavItem } from '@/components/layouts/app/sidebar/nav-item';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Games', href: '/games', icon: CalendarIcon, current: false },
  {
    name: 'Promotions',
    href: '/promotions',
    icon: UserGroupIcon,
    current: false,
  },
];

export function Sidebar({ className }: { className?: string }) {
  const classNames = clsx('relative md:w-48', className);

  return (
    <aside className={classNames}>
      <nav className="bg-blue-800 h-full fixed hidden md:block md:w-48 space-y-1 p-2">
        {navigation.map((nav) => (
          <SidebarNavItem href={nav.href} key={nav.name} text={nav.name} />
        ))}
      </nav>
    </aside>
  );
}
