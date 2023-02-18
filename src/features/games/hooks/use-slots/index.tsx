import { useCallback, useEffect, useMemo, useState } from 'react';
import { randomizeSlotItems } from '@/features/games/utils/randomize-slot-items';
import { winsInReel } from '@/features/games/utils/wins-in-reel';
import { pickOneFromEachArray } from '@/features/games/utils/pick-one-from-each-array';
import { calculateWinnings } from '@/features/games/utils/calculate-winnings';
import { debounce } from '@/utils/debounce';
import type { UseSlot } from '@/features/games/hooks/use-slots/use.slots.types';

export function useSlots({
  slotList,
  creditsAmount = 20,
  creditCostPerSpin = 1,
  winMatchAwards,
  spinTime = 100,
}: UseSlot) {
  const [reel, setReel] = useState<string[] | []>();
  const [availableCredits, setAvailableCredits] = useState(creditsAmount);
  const [totalWins, setTotalWins] = useState(0);
  const [totalLosses, setTotalLosses] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [roundWinAmount, setRoundWinAmount] = useState(0);
  const [roundLossAmount, setRoundLossAmount] = useState(0);
  const [totalWinningsAmount, setTotalWinningsAmount] = useState(0);
  const [totalLossesAmount, setTotalLossesAmount] = useState(0);
  const [message, setMessage] = useState<
    { type: 'error' | 'warning' | 'info'; text: string } | undefined
  >();

  const hasAvailableCredits = availableCredits >= creditCostPerSpin;
  const matchAwards = useMemo(() => winMatchAwards, [winMatchAwards]);

  /* We spin the reel, check for wins and  */
  const handleSpin = debounce(() => {
    if (!hasAvailableCredits) {
      setMessage({ type: 'error', text: 'Not enough credits' });
      return;
    }
    setAvailableCredits((prev) => prev - creditCostPerSpin);
    spinReel();
  }, spinTime);

  const spinReel = useCallback(
    function spinReel() {
      if (!slotList) return;
      const randomizeSlots = randomizeSlotItems({ slotItems: slotList });
      const newReel = pickOneFromEachArray({
        array: randomizeSlots,
      }) as string[];
      setReel(newReel);
    },
    [slotList],
  );

  /** We pick a single item from each array in the slotList */
  useEffect(() => {
    spinReel();
  }, [slotList, spinReel]);

  useEffect(() => {
    const wins = winsInReel({ reel });
    const credits = calculateWinnings({
      ...wins,
      winMatchAwards: matchAwards,
    });
    if (wins?.count) {
      setIsWin(true);
      setRoundWinAmount(credits);
      setRoundLossAmount(0);
    } else {
      setRoundWinAmount(0);
      setRoundLossAmount(creditCostPerSpin);
      setIsWin(false);
    }
  }, [creditCostPerSpin, matchAwards, reel]);

  useEffect(() => {
    setTotalWinningsAmount((prev) => prev + roundWinAmount);
    setTotalWins((prev) => prev + (roundWinAmount > 0 ? 1 : 0));
  }, [roundWinAmount]);

  useEffect(() => {
    setTotalLossesAmount((prev) => prev + roundLossAmount);
    setTotalLosses((prev) => prev + (roundLossAmount > 0 ? 1 : 0));
  }, [roundLossAmount]);

  return {
    availableCredits,
    isWin,
    totalWins,
    totalLosses,
    reel,
    message,
    handleSpin,
    roundWinAmount,
    totalWinningsAmount,
    roundLossAmount,
    totalLossesAmount,
  };
}
