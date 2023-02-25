import { useGetSlotsQuery } from '@/store/api/slots';
import { Button } from '@/ui/button/button';
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
    slotList: data,
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
      {/*<div className="grid grid-cols-3">
        {slots?.map((reelColumn, index) => {
          return (
            <div>
              {reelColumn.map((fruit) => {
                return (
                  <motion.div
                    className="bg-blue-500"
                    key={`${fruit}-${index}`}
                    layout
                  >
                    {fruit}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>*/}
      {/*<div className="text-pink-700">{JSON.stringify(slots, null, 2)}</div>
      <div>
        {reel?.map((item) => {
          return (
            <div className="bg-red-500" key={item}>
              {item}
            </div>
          );
        })}
      </div>*/}
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
