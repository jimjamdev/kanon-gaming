import type { Slot } from '../hooks/use-slots';

export function winsInReel({
  reel,
  winMatchAwards,
}: {
  reel?: string[];
  winMatchAwards?: Slot['winMatchAwards'];
}) {
  // return the name and total count of matching words in a row in a reel
  const wins = reel?.reduce(
    (acc, item, index, array) => {
      const nextItem = array[index + 1];

      if (item === nextItem) {
        acc.count += index + 1;
        acc.name = item;
      }

      return acc;
    },
    { count: 0, name: '' },
  );

  return wins;
}
