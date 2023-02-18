import type { Game } from '@/types/games.types';

interface GameThumbnailProps extends Game {
  className?: string;
}

export function GameThumbnail({ title }: GameThumbnailProps) {
  return (
    <div className="flex flex-col items-center justify-center">{title}</div>
  );
}
