import dynamic from 'next/dynamic';

export const portalsList = {
  game: dynamic(() => import('./game')),
};
