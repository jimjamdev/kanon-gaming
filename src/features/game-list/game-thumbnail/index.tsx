import Image from 'next/image';
import type { Game } from '@/types/games.types';

interface GameThumbnailProps extends Game {
  className?: string;
}

export function GameThumbnail({
  title,
  providerName,
  thumb,
  slug,
}: GameThumbnailProps) {
  return (
    <div className="flex flex-col items-center justify-center aspect-square">
      <h4>{title}</h4>
      {providerName}
      <Image
        alt={title || ''}
        className="aspect-square"
        height={280}
        priority
        src={thumb?.url ? `https:${thumb.url}` : '/vercel.svg'}
        width={280}
      />
      {slug}
    </div>
  );
}
