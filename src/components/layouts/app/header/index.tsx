import Image from 'next/image';
import { Button } from '@/ui/components/button/button';

export function AppHeader({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div
        aria-label="Global"
        className="bg-white mx-auto flex items-center justify-between gap-x-6 p-6 lg:px-8 shadow-md"
      >
        <Image
          alt="Kanon Gaming"
          height={48}
          src="/images/icons/icon-72x72.png"
          width={48}
        />

        <Button rounded>Login</Button>
      </div>
    </header>
  );
}
