import Head from 'next/head';
// import { useGetGamesQuery } from '@/store/games';
// import { config } from '@/config';
import { SlotsGame } from '@/features/games/slots';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
  // const { data: games } = useGetGamesQuery();
  return (
    <>
      <Head>
        <title>Kanon Gaming</title>
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
      <h1 className="font-bold bg-orange-500 text-fuchsia-50 uppercase p-2.5 text-4xl text-center">
        Hello there!
      </h1>
      <SlotsGame />
      {/* <pre>{JSON.stringify(config, null, 2)}</pre>
      <pre>{JSON.stringify(games?.data, null, 2)}</pre>*/}
    </>
  );
}
