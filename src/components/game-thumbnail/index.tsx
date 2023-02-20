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
    <div className="flex flex-col items-center justify-center">
      <h4>{title}</h4>
      {providerName}
      <Image alt={title || ''} height={280} priority src={thumb?.url ? `https:${thumb.url}` : '/images/vercel.svg'} width={280} />
      {slug}
    </div>
  );
}
