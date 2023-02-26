import { useGetSlotsQuery } from '@/store/api/slots';
import { Button } from '@/ui/components/button/button';
import type { Slots } from '@/types/slots.types';
import { useSlots } from '../hooks/use-slots';

export function SlotsGame() {
  const { data } = useGetSlotsQuery();

  const {
    handleSpin,
    isWin,
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
        2: 20,
        3: 30,
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

  return (
    <div>
      <h1>Slots</h1>
      <pre>{JSON.stringify(reel)}</pre>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSpin}
        type="button"
      >
        Spin
      </Button>
      credits: {availableCredits}
      <div className="text-red-500">{message?.text}</div>
      <p>win: {isWin ? 'true' : 'false'}</p>
      <p>total wins: {totalWins}</p> / losses {totalLosses}
      <p>round won: </p> ${roundWinAmount} / round lost ${roundLossAmount}
      <p>
        total amount won: ${totalWinningsAmount} / lost ${totalLossesAmount}
      </p>
    </div>
  );
}
