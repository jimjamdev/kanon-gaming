import { GameList } from '@/features/game-list';
import { ContentContainer } from '@/components/content-container';
import { wrapper } from '@/store';
import { getGames } from '@/store/api/games';

export default function GamePage() {
  return (
    <ContentContainer>
      <GameList />
    </ContentContainer>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getGames.initiate());
  return {
    props: {},
  };
});
