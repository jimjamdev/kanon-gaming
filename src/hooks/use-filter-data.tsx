import { useEffect, useState } from 'react';

export function useFilterData<T>(data?: T[], search = '') {
  const [filteredData, setFilteredData] = useState<T[] | undefined>(data);

  useEffect(() => {
    if (data?.length && Array.isArray(data)) {
      const filtered = data.filter((item) => {
        const itemString = JSON.stringify(item);
        return itemString.includes(search);
      });

      setFilteredData(filtered);
    }
  }, [data, search]);

  return filteredData;
}
