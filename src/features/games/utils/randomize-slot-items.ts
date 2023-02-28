import { randomizeArray } from './randomize-array';

export function randomizeSlotItems({ slotItems }: { slotItems?: string[][] }) {
  const [first, second, third] = slotItems || [];
  const reel1 = first || [];
  const reel2 = second || [];
  const reel3 = third || [];

  const randomisedReel1 = randomizeArray({ array: reel1 });
  const randomisedReel2 = randomizeArray({ array: reel2 });
  const randomisedReel3 = randomizeArray({ array: reel3 });

  return [randomisedReel1, randomisedReel2, randomisedReel3];
}
