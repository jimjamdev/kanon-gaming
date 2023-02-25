import type { ReactNode } from 'react';
// import { Inter } from '@next/font/google';
import { AppHeader } from '@/components/layouts/app/header';
import { Main } from '@/components/layouts/app/main';
import { Sidebar } from '@/components/layouts/app/sidebar';
import styles from './app.module.css';
import { Footer } from './footer';

// const inter = Inter({ subsets: ['latin'] });

export interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className={styles.layout}>
      <AppHeader className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Main>{children}</Main>
      <Footer className={styles.footer} />
    </main>
  );
}
