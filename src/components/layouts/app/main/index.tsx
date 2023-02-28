import type { ReactNode } from 'react';

export function Main({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}
