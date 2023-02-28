import { v4 as uuidv4 } from 'uuid';
import { useGetSlotsQuery } from '@/store/api/slots';
import { Button } from '@/ui/components/button/button';
import type { Slots } from '@/types/slots.types';
import { InfoLabel } from '@/features/games/slots-game/info-label';
import { useSlots } from '../hooks/use-slots';

export function SlotsGame() {
  const { data } = useGetSlotsQuery();
  type Fruits = Record<string, string>;
  const fruits: Fruits = {
    cherry: '🍒',
    lemon: '🍋',
    apple: '🍎',
    banana: '🍌',
  };

  const {
    handleSpin,
    totalWins,
    availableCredits,
    message,
    reel,
    roundWinAmount,
    totalWinningsAmount,
    totalLossesAmount,
    totalLosses,
    roundLossAmount,
  } = useSlots({
    slotList: data as Slots['data'],
    creditsAmount: 20,
    creditCostPerSpin: 1,
    winMatchAwards: {
      cherry: {
        0: 0,
        2: 40,
        3: 50,
      },
      lemon: {
        0: 0,
        2: 0,
        3: 3,
      },
      apple: {
        0: 0,
        2: 10,
        3: 20,
      },
      banana: {
        0: 0,
        2: 5,
        3: 15,
      },
    },
  });

  function renderReels() {
    return reel ? (
      reel.map((item) => {
        const key = uuidv4();
        return (
          <span className="p-4 text-7xl h-[100px]" key={key}>
            {fruits[item]}
          </span>
        );
      })
    ) : (
      <div className="flex items-center justify-center p-4 text-2xl md:text-4xl text-center h-[100px]">
        SPIN TO START
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-around bg-blue-300 rounded-lg">
        {renderReels()}
      </div>
      <div className="text-red-500">{message?.text}</div>
      <div className="grid grid-cols-3 md: grid-cols-7">
        <InfoLabel label="Credits" value={availableCredits} />
        <InfoLabel label="Wins" value={totalWins} />
        <InfoLabel label="Losses" value={totalLosses} />
        <InfoLabel label="Round Win" value={`$${roundWinAmount}`} />
        <InfoLabel label="Round Loss" value={`$${roundLossAmount}`} />
        <InfoLabel label="Total Wins" value={`$${totalWinningsAmount}`} />
        <InfoLabel label="TotalLosses" value={`$${totalLossesAmount}`} />
      </div>
      <Button onClick={handleSpin} rounded size="lg" type="button">
        Spin
      </Button>
    </div>
  );
}
