import Head from 'next/head';
import { useState } from 'react';
import { SlotsGame } from '@/features/games/slots-game';
import { useFilterData } from '@/hooks/use-filter-data';
import { GameThumbnail } from '@/components/game-thumbnail';
import { wrapper } from '@/store';
import { getGames, useGetGamesQuery } from '@/store/api/games';
// eslint-disable-next-line import/no-default-export
export default function Home() {
  const { data: games } = useGetGamesQuery();
  const [searchQuery, setSearchQuery] = useState('');
  // @ts-expect-error - We've set a generic type
  const filteredData = useFilterData(games, searchQuery);
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
      <pre>{JSON.stringify(games)}</pre>
      <h2>FilteredData</h2>
      <pre>{JSON.stringify(filteredData)}</pre>
      <div>
        {games?.data?.map((game) => {
          return <GameThumbnail key={game.title} {...game} />;
        })}
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getGames.initiate());
    return {
      props: {},
    };
  },
);
