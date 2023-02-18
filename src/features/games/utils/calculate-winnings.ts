import type { MatchRewards } from '@/types/slots.types';

export function calculateWinnings({
  count = 0,
  symbol = '',
  winMatchAwards,
}: {
  count?: number;
  symbol?: string;
  winMatchAwards: MatchRewards;
}) {
  return winMatchAwards?.[symbol]?.[count] || 0;
}
