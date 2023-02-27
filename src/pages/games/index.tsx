import { GameList } from '@/features/game-list';
import { ContentContainer } from '@/components/content-container';

// eslint-disable-next-line import/no-default-export
export default function GamePage() {
  return (
    <ContentContainer>
      <GameList />
    </ContentContainer>
  );
}
