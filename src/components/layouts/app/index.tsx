import type { ReactNode } from 'react';
// import { Inter } from '@next/font/google';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Kanon Gaming - Play Games & Win Big</title>
        <meta
          content="My Kanon is loaded and ready to fire!"
          name="description"
        />
        <meta content="#2E7BBA" name="theme-color" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/manifest.json" rel="manifest" />
        <link
          href="/images/icons/apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className={[styles.layout, 'bg-white'].join(' ')}>
        <AppHeader className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <Main className={styles.main}>{children}</Main>
        <Footer className={styles.footer} />
      </div>
    </>
  );
}
