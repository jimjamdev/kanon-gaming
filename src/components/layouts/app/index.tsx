import type { ReactNode } from 'react';

export interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return <main className="flex-1">{children}</main>;
}
