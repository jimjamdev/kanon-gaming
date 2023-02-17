import { motion, Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useGetSlotsQuery } from '@/store/slots';
import { useSlots } from '../hooks/use-slots';

export function SlotsGame() {
  const { data, isLoading, error } = useGetSlotsQuery();
  const { data: slotList } = data || {};
  const { spin, isWin, totalWins, availableCredits, message, reel } = useSlots({
    slotList,
    creditsAmount: 20,
    creditCostPerSpin: 1,
    winMatchAwards: {
      cherry: {
        1: 0,
        2: 40,
        3: 50,
      },
      lemon: {
        1: 0,
        2: 20,
        3: 30,
      },
      apple: {
        1: 0,
        2: 10,
        3: 20,
      },
      banana: {
        1: 0,
        2: 5,
        3: 15,
      },
    },
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
      {/*<div className="grid grid-cols-3">
        {slots?.map((reelColumn, index) => {
          return (
            <div>
              {reelColumn.map((fruit) => {
                return (
                  <motion.div
                    className="bg-blue-500"
                    key={`${fruit}-${index}`}
                    layout
                  >
                    {fruit}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>*/}
      {/*<div className="text-pink-700">{JSON.stringify(slots, null, 2)}</div>
      <div>
        {reel?.map((item) => {
          return (
            <div className="bg-red-500" key={item}>
              {item}
            </div>
          );
        })}
      </div>*/}
      <pre>{JSON.stringify(reel)}</pre>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={spin}
        type="button"
      >
        Spin
      </button>
      credits: {availableCredits}
      <div className="text-red-500">{message?.text}</div>
      <p>win: {isWin ? 'true' : 'false'}</p>
      <p>total wins: {totalWins}</p>
    </div>
  );
}
