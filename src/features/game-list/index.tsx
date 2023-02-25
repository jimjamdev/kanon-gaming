import { useState } from 'react';
import { useGetGamesQuery } from '@/store/api/games';
import { useFilterData } from '@/hooks/use-filter-data';
import { GameThumbnail } from '@/features/game-list/game-thumbnail';
import type { Games } from '@/types/games.types';

export function GameList() {
  const { data: games, isLoading, error } = useGetGamesQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = useFilterData(games as Games['data'], searchQuery)!;

  function renderGames() {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Something went wrong</p>;
    }

    if (filteredData.length === 0) {
      return <p>No games found</p>;
    }

    return (
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
        {filteredData.map((game) => {
          return <GameThumbnail key={game.id} {...game} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <input
        onInput={(e) => setSearchQuery(e.currentTarget.value)}
        type="text"
      />
      {renderGames()}
    </div>
  );
}
