import { createSlice } from '@reduxjs/toolkit';
import { getSlots } from '@/store/slot/slot.actions';

interface slotsState {
  data: any[];
  isLoading: boolean;
  error: { message: string; code: number } | unknown | null;
}

const initialState: slotsState = {
  data: [],
  isLoading: false,
  error: null,
};

export const slotsSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSlots.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSlots.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getSlots.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
