import { useCallback, useEffect, useState } from 'react';
import { randomizeSlotItems } from '@/features/games/utils/randomize-slot-items';
import { winsInReel } from '@/features/games/utils/wins-in-reel';
import { pickOneFromEachArray } from '@/features/games/utils/pick-one-from-each-array';
import { calculateWinnings } from '@/features/games/utils/calculate-winnings';

type WinMatchAwards = Record<string, Record<number, number>>;

interface UseSlotsProps {
  slotList?: string[][];
  creditsAmount: number;
  creditCostPerSpin: number;
  winMatchAwards: WinMatchAwards;
}

interface UseSlots {
  handleSpin: () => void;
  isWin: boolean;
  totalWins: number;
  availableCredits: number;
  message:
    | { type: 'error'; text: string }
    | { type: 'warning'; text: string }
    | { type: 'info'; text: string }
    | undefined;
  reel: string[] | undefined;
  roundWinAmount: number;
  totalWinningsAmount: number;
  totalLossesAmount: number;
  totalLosses: number;
  roundLossAmount: number;
}

export function useSlots({
  slotList,
  creditsAmount = 20,
  creditCostPerSpin = 1,
  winMatchAwards,
}: UseSlotsProps): UseSlots {
  const [reel, setReel] = useState<string[] | undefined>(undefined);
  const [availableCredits, setAvailableCredits] =
    useState<number>(creditsAmount);
  const [totalWins, setTotalWins] = useState<number>(0);
  const [totalLosses, setTotalLosses] = useState<number>(0);
  const [isWin, setIsWin] = useState<boolean>(false);
  const [roundWinAmount, setRoundWinAmount] = useState<number>(0);
  const [roundLossAmount, setRoundLossAmount] = useState<number>(0);
  const [totalWinningsAmount, setTotalWinningsAmount] = useState<number>(0);
  const [totalLossesAmount, setTotalLossesAmount] = useState<number>(0);
  const [message, setMessage] = useState<
    | { type: 'error'; text: string }
    | { type: 'warning'; text: string }
    | { type: 'info'; text: string }
    | undefined
  >(undefined);

  const hasAvailableCredits = availableCredits >= creditCostPerSpin;

  const randomizeSlots = useCallback(
    () => randomizeSlotItems({ slotItems: slotList }),
    [slotList],
  );

  const pickOneFromEachArrayCallback = useCallback(
    () => pickOneFromEachArray({ array: randomizeSlots() }) as string[],
    [randomizeSlots],
  );

  const calculateWinningsCallback = useCallback(
    (wins: { count: number; symbol: string }) =>
      calculateWinnings({ ...wins, winMatchAwards }),
    [winMatchAwards],
  );

  const handleSpin = useCallback(() => {
    if (!hasAvailableCredits) {
      setMessage({ type: 'error', text: 'Not enough credits' });
      return;
    }

    setAvailableCredits((prev) => prev - creditCostPerSpin);
    const newReel = pickOneFromEachArrayCallback();
    setReel(newReel);

    const wins = winsInReel({ reel: newReel }) as {
      count: number;
      symbol: string;
    };
    const credits = calculateWinningsCallback(wins);

    if (wins.count) {
      setIsWin(true);
      setRoundWinAmount(credits);
      setRoundLossAmount(0);
    } else {
      setIsWin(false);
      setRoundWinAmount(0);
      setRoundLossAmount(creditCostPerSpin);
    }
  }, [
    hasAvailableCredits,
    creditCostPerSpin,
    pickOneFromEachArrayCallback,
    calculateWinningsCallback,
    setReel,
  ]);

  useEffect(() => {
    if (roundWinAmount) {
      setTotalWinningsAmount((prev) => prev + roundWinAmount);
      setTotalWins((prev) => prev + 1);
    }

    if (roundLossAmount) {
      setTotalLossesAmount((prev) => prev + roundLossAmount);
      setTotalLosses((prev) => prev + 1);
    }
  }, [roundWinAmount, roundLossAmount, setTotalLossesAmount, setTotalLosses]);

  return {
    handleSpin,
    isWin,
    totalWins,
    availableCredits,
    message,
    reel,
    roundWinAmount,
    totalWinningsAmount,
    roundLossAmount,
    totalLossesAmount,
    totalLosses,
  };
}
