import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '@/store/utils/fetch-api';

export const getSlots = createAsyncThunk('slots/getSlots', async () => {
  return await fetchApi('slots');
});
