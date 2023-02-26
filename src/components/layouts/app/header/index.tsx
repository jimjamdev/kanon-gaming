import Image from 'next/image';

export function AppHeader({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div className="flex items-center justify-between bg-gray-800 text-white p-4">
        <Image
          alt="Kanon Gaming"
          height={72}
          src="/images/icons/icon-72x72.png"
          width={72}
        />
        Kanon Gaming
      </div>
    </header>
  );
}
