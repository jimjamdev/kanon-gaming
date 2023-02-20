import type { ReactNode } from 'react';
// import { Inter } from '@next/font/google';
import { AppHeader } from '@/components/layouts/app/header';

// const inter = Inter({ subsets: ['latin'] });

export interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className={['grid'].join(' ')}>
      <AppHeader />
      {children}
    </main>
  );
}
