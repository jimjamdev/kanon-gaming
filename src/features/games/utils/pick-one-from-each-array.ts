export function pickOneFromEachArray<T>({
  array = [[]],
}: { array?: T[][] } = {}) {
  if (!Array.isArray(array)) {
    throw new Error('The "array" parameter must be an array of arrays.');
  }
  if (array.some((item) => !Array.isArray(item))) {
    throw new Error('All items in the "array" parameter must be arrays.');
  }
  return array.map((item) => item[Math.floor(Math.random() * item.length)]);
}
