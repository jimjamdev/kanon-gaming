import type { MatchRewards } from '@/types/slots.types';

export interface UseSlot {
  slotList?: string[][];
  creditsAmount?: number;
  creditCostPerSpin?: number;
  winMatchAwards: MatchRewards;
  spinTime?: number;
}
