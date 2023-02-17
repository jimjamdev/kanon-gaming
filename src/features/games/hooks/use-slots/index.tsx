import { useEffect, useState } from 'react';
import { randomizeSlotItems } from '@/features/games/utils/randomize-slot-items';
import { winsInReel } from '@/features/games/utils/wins-in-reel';
import { pickOneFromEachArray } from '@/features/games/utils/pick-one-from-each-array';

export interface Slot {
  slotList?: string[][];
  creditsAmount?: number;
  creditCostPerSpin?: number;
  winMatchAwards?: Record<string, { 1: number; 2: number; 3: number }>;
}

export function useSlots({
  slotList,
  creditsAmount = 20,
  creditCostPerSpin = 1,
  winMatchAwards,
}: Slot) {
  const [reel, setReel] = useState<string[] | []>();
  const [availableCredits, setAvailableCredits] = useState(creditsAmount);
  const [totalWins, setTotalWins] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [awards, setAwards] = useState(0);
  const [message, setMessage] = useState<
    { type: 'error' | 'warning' | 'info'; text: string } | undefined
  >();

  console.log('***winMatchAwards', winMatchAwards, '***slotList', slotList);

  /* useEffect(() => {
    setSlots(slotList);
    return () => {
      setSlots(undefined);
    };
  }, [slotList]);*/

  /*useEffect(() => {
    setWinAwards(winMatchAwards);
    return () => {
      setWinAwards(undefined);
    };
  }, [winMatchAwards]);*/

  useEffect(() => {
    if (!slotList) return;
    // pick one from each slot array
    const setReal = pickOneFromEachArray({ array: slotList }) as string[];
    setReel(setReal);
  }, [slotList]);

  function spin() {
    if (!slotList) return;
    if (availableCredits < creditCostPerSpin) {
      setMessage({ type: 'error', text: 'Not enough credits' });
      return;
    }
    setAvailableCredits((prev) => prev - creditCostPerSpin);
    const randomisedSlotItems = randomizeSlotItems({ slotItems: slotList });
    const newReel = pickOneFromEachArray({
      array: randomisedSlotItems,
    }) as string[];
    setReel(newReel);
  }

  useEffect(() => {
    const checkIsWin = winMatchAwards
      ? winsInReel({ reel, winMatchAwards })
      : false;
    console.log('checkIsWin', checkIsWin);
    /* if (checkIsWin) {
      setIsWin(true);
      setTotalWins((prev) => prev + 1);
    } else {
      setIsWin(false);
    }*/
  }, [reel, winMatchAwards]);

  return {
    spin,
    availableCredits,
    isWin,
    totalWins,
    reel,
    message,
    awards,
  };
}
