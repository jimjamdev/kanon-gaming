import { useEffect, useState } from 'react';

export function useFilterData<T extends Record<string, never>>({
  data,
  search = '',
}: {
  data?: unknown[];
  search?: string;
}) {
  const [filteredData, setFilteredData] = useState<(T | undefined)[]>([]);

  useEffect(() => {
    const filtered = data?.filter((item) => {
      const itemString = JSON.stringify(item);
      return itemString.includes(search);
    });

    // @ts-expect-error - filtered is not undefined
    setFilteredData(filtered);
  }, [data, search]);

  return { filteredData };
}
