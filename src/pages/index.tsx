import Head from 'next/head';
import { wrapper } from '@/store';
import { getGames } from '@/store/api/games';
import { GameList } from '@/features/game-list';
import { Banner } from '@/components/banner';
import { ContentContainer } from '@/components/content-container';
// eslint-disable-next-line import/no-default-export
export default function Home() {
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
      <Banner />
      <ContentContainer>
        <GameList />
      </ContentContainer>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getGames.initiate());
  return {
    props: {},
  };
});
