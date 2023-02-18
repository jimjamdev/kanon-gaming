import { useEffect, useState } from 'react';

export function useFilterData({
  data = [],
  search = '',
}: {
  data?: [];
  search?: string;
}) {
  const [filteredData, setFilteredData] = useState<never[]>([]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const itemString = JSON.stringify(item);
      return itemString.includes(search);
    });
    setFilteredData(filtered);
  }, [data, search]);

  return { filteredData };
}
