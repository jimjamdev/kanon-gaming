import Head from 'next/head';
import { useState } from 'react';
import { getGames, useGetGamesQuery } from '@/store/games';
import { SlotsGame } from '@/features/games/slots-game';
import { useFilterData } from '@/hooks/use-filter-data';
import { GameThumbnail } from '@/components/game-thumbnail';
import type { Games } from '@/types/games.types';

// eslint-disable-next-line import/no-default-export
export default function Home({ games }: { games: Games }): JSX.Element {
  const { data } = useGetGamesQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const { filteredData: gamesList = [] } = useFilterData({
    data: data?.data || games.data,
    search: searchQuery,
  });
  return (
    <>
      <Head>
        <title>Kanon Gaming - Play Games & Win Big</title>
        <meta
          content="My Kanon is loaded and ready to fire!"
          name="description"
        />
        <meta content="#2E7BBA" name="theme-color" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/manifest.json" rel="manifest" />
        <link
          href="/images/icons/apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <SlotsGame />
      <input
        onInput={(e) => setSearchQuery(e.currentTarget.value)}
        type="text"
      />
      <h2>GameList</h2>
      <div>
        {gamesList.map((game) => {
          return <GameThumbnail key={game?.title} {...game} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // @ts-expect-error - TODO: Fix this
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const games: Games = await getGames();
  return {
    props: {
      games,
    },
  };
}
