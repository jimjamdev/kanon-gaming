import { wrapper } from '@/store';
import { getGames } from '@/store/api/games';
import { GameList } from '@/features/game-list';
import { Banner } from '@/components/banner';
import { ContentContainer } from '@/components/content-container';
 
export default function Home() {
  return (
    <>
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
