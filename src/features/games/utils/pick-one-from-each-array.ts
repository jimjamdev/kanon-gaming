export function pickOneFromEachArray<T>({ array }: { array?: T[][] }) {
  return Array.isArray(array) && array.length
    ? array.map((item) => item[Math.floor(Math.random() * item.length)])
    : [];
}
