import { useEffect, useState } from 'react';
import { randomizeSlotItems } from '@/features/games/utils/randomize-slot-items';
import { winsInArray } from '@/features/games/utils/wins-in-array';

interface Slot {
  slotList?: string[][];
  creditsAmount?: number;
  creditCostPerSpin?: number;
  winMatchAwards?: Record<string, { 1: number; 2: number; 3: number }>;
}

export function useSlots({
  slotList,
  creditsAmount = 20,
  creditCostPerSpin = 1,
  winMatchAwards = {
    cherry: {
      1: 0,
      2: 40,
      3: 50,
    },
    lemon: {
      1: 0,
      2: 20,
      3: 30,
    },
    apple: {
      1: 0,
      2: 10,
      3: 20,
    },
    banana: {
      1: 0,
      2: 5,
      3: 15,
    },
  },
}: Slot) {
  const [slots, setSlots] = useState<string[][] | undefined>();
  const [reel, setReel] = useState<string[][] | undefined>();
  const [availableCredits, setAvailableCredits] = useState(creditsAmount);
  const [wins, setWins] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [awards, setAwards] = useState(0);
  const [message, setMessage] = useState<
    { type: 'error' | 'warning' | 'info'; text: string } | undefined
  >();

  useEffect(() => {
    setSlots(slotList);
    return () => {
      setSlots(undefined);
    };
  }, [slotList]);

  useEffect(() => {
    if (!slots) return;
    const checkWins = winsInArray({ array: slots[0] });
    const matchAwards = winMatchAwards;
    setWins(checkWins);
    setIsWin(checkWins > 0);
    setReel(slots);
    setAwards(1);
    // eslint-disable-next-line no-console
    console.log('winsInArray', checkWins, matchAwards);
  }, [slots, winMatchAwards]);

  function spin() {
    if (!slots) return;
    if (availableCredits < creditCostPerSpin) {
      setMessage({ type: 'error', text: 'Not enough credits' });
      return;
    }
    const randomisedSlotItems = randomizeSlotItems({ slotItems: slots });
    setAvailableCredits((prev) => prev - creditCostPerSpin);
    setSlots(randomisedSlotItems);
  }

  return {
    spin,
    availableCredits,
    isWin,
    wins,
    slots,
    reel,
    message,
    awards,
  };
}
