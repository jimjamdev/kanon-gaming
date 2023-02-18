import { randomizeArray } from './randomize-array';

export function randomizeSlotItems({ slotItems }: { slotItems: string[][] }) {
  const reel1 = slotItems[0] || [];
  const reel2 = slotItems[1] || [];
  const reel3 = slotItems[2] || [];

  const randomisedReel1 = randomizeArray({ array: reel1 });
  const randomisedReel2 = randomizeArray({ array: reel2 });
  const randomisedReel3 = randomizeArray({ array: reel3 });

  return [randomisedReel1, randomisedReel2, randomisedReel3];
}
