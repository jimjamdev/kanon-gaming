import { useEffect, useState } from 'react';
import { randomizeSlotItems } from '@/features/games/utils/randomize-slot-items';

interface Slot {
  slotList?: string[][];
  creditsAmount?: number;
  creditCostPerSpin?: number;
}

export function useSlots({
  slotList,
  creditsAmount = 20,
  creditCostPerSpin = 1,
}: Slot) {
  const [slots, setSlots] = useState<string[][] | undefined>();
  const [availableCredits, setAvailableCredits] = useState(creditsAmount);
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    setSlots(slotList);
    return () => {
      setSlots(undefined);
    };
  }, [slotList]);

  function spin() {
    if (!slots) return;
    if (availableCredits < creditCostPerSpin) {
      setMessage('Not enough credits');
      return;
    }
    const randomisedSlotItems = randomizeSlotItems({ slotItems: slots });
    setAvailableCredits((prev) => prev - creditCostPerSpin);
    setSlots(randomisedSlotItems);
  }

  const win = () => {
    return true;
  };

  const wins = 0;

  return {
    spin,
    availableCredits,
    win,
    wins,
    slots,
    message,
  };
}
