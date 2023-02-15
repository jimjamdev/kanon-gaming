/* check how many matching keys in a row the array has, make sure it's immutable */

export function winsInArray<T>({ array = [] }: { array?: T[] }): number {
  let wins = 0;
  let previousKey: T | undefined;
  array.forEach((key) => {
    if (previousKey === key) {
      wins += 1;
    }
    previousKey = key;
  });
  return wins;
}
