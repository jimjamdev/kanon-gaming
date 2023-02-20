import type { ErrorType } from '@/types/common/error.types';

export interface Game {
  id?: number;
  slug?: string;
  title?: string;
  providerName?: string;
  thumb?: {
    url?: string;
  };
}

export interface Games {
  data?: Game[];
  isLoading?: boolean;
  error?: ErrorType;
}
