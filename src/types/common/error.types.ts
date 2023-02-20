import type { SerializedError } from '@reduxjs/toolkit';

export type ErrorType =
  | (SerializedError & Record<never, never>)
  | null
  | undefined;
