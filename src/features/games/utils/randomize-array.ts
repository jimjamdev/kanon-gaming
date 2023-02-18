export function randomizeArray<T>({ array = [] }: { array: T[] }): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}
