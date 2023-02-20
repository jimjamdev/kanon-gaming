import type { MatchRewards, Slots } from '@/types/slots.types';

export interface UseSlot {
  slotList?: Slots;
  creditsAmount?: number;
  creditCostPerSpin?: number;
  winMatchAwards: MatchRewards;
  spinTime?: number;
}
