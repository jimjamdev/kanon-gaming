import Image from 'next/image';
import Link from 'next/link';

export function AppHeader({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div className="flex items-center justify-between bg-gray-800 text-white p-4">
        <h1 className="text-2xl">
          <Image
            alt="Kanon Gaming"
            height={72}
            src="/images/icons/icon-72x72.png"
            width={72}
          />
          Kanon Gaming
        </h1>
        <nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/game">Games</Link>
        </nav>
      </div>
    </header>
  );
}
