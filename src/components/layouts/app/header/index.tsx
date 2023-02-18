import Image from 'next/image';

export function AppHeader() {
  return (
    <header>
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
          <a href="/">Home</a>
          <a href="/games">Games</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}
