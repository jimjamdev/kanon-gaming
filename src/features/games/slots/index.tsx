import { useGetSlotsQuery } from '@/store/slots';
import { useSlots } from '../hooks/use-slots';

export function SlotsGame() {
  const { data, isLoading, error } = useGetSlotsQuery();
  const { slots, spin, win, availableCredits, message } = useSlots({
    slotList: data?.data || [],
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Slots</h1>
      <div className="text-pink-700">{JSON.stringify(slots, null, 2)}</div>
      {JSON.stringify(data, null, 2)}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={spin}
        type="button"
      >
        Spin
      </button>
      credits: {availableCredits}
      <div className="text-red-500">{message}</div>
      <p>win: {win() ? 'true' : 'false'}</p>
    </div>
  );
}
