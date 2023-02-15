import { shuffleArray } from './shuffle-array';

export function randomizeArray<T>({ array = [] }: { array: T[] }): T[] {
  return [...array].sort(shuffleArray);
}
