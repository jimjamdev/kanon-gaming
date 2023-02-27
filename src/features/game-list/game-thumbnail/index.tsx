import Link from 'next/link';
import type { Game } from '@/types/games.types';
import { Image } from '@/ui/components/image';

interface GameThumbnailProps extends Game {
  className?: string;
}

export function GameThumbnail({ title, thumb, slug }: GameThumbnailProps) {
  return (
    <div className="aspect-square">
      <Link href={`/games/game/${slug || ''}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="rounded-lg shadow-md">
          <Image
            alt={title || ''}
            className="aspect-square object-contain rounded-lg shadow-sm"
            height={280}
            priority
            src={thumb?.url ? `https:${thumb.url}` : '/vercel.svg'}
            width={280}
          />
        </a>
      </Link>
    </div>
  );
}
