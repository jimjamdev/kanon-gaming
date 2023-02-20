import { useCallback, useEffect, useMemo, useState } from 'react';
import { randomizeSlotItems } from '@/features/games/utils/randomize-slot-items';
import { winsInReel } from '@/features/games/utils/wins-in-reel';
import { pickOneFromEachArray } from '@/features/games/utils/pick-one-from-each-array';
import { calculateWinnings } from '@/features/games/utils/calculate-winnings';
import type { UseSlot } from '@/features/games/hooks/use-slots/use.slots.types';

export function useSlots({
  slotList,
  creditsAmount = 20,
  creditCostPerSpin = 1,
  winMatchAwards,
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
  const matchAwardsMemoized = useMemo(() => winMatchAwards, [winMatchAwards]);
  const winsInReelMemoized = useMemo(() => winsInReel, []);
  const calculateWinningsMemoized = useMemo(() => calculateWinnings, []);
  const pickOneFromEachArrayMemoized = useMemo(() => pickOneFromEachArray, []);

  const spinReel = useCallback(
    function spinReel() {
      if (!slotList) return;
      // @ts-expect-error - until i fix type
      const randomizeSlots = randomizeSlotItems({ slotItems: slotList });
      const newReel = pickOneFromEachArrayMemoized({
        array: randomizeSlots,
      }) as string[];
      setReel(newReel);
    },
    [slotList, pickOneFromEachArrayMemoized],
  );

  useEffect(() => {
    spinReel();
  }, [slotList, spinReel]);

  useEffect(() => {
    const wins = winsInReelMemoized({ reel });
    const credits = calculateWinningsMemoized({
      ...wins,
      winMatchAwards: matchAwardsMemoized,
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
  }, [
    creditCostPerSpin,
    matchAwardsMemoized,
    reel,
    calculateWinningsMemoized,
    winsInReelMemoized,
  ]);

  useEffect(() => {
    if (roundWinAmount > 0) {
      setTotalWinningsAmount((prev) => prev + roundWinAmount);
      setTotalWins((prev) => prev + 1);
    }
  }, [roundWinAmount]);

  useEffect(() => {
    if (roundLossAmount > 0) {
      setTotalLossesAmount((prev) => prev + roundLossAmount);
      setTotalLosses((prev) => prev + 1);
    }
  }, [roundLossAmount]);

  const handleSpin = useCallback(() => {
    if (!hasAvailableCredits) {
      setMessage({ type: 'error', text: 'Not enough credits' });
      return;
    }
    setAvailableCredits((prev) => prev - creditCostPerSpin);
    spinReel();
  }, [hasAvailableCredits, spinReel, creditCostPerSpin]);

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
