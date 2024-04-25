import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    name: '',
    country: '',
    region: '',
    history: '',
    description: '',
  },
  reducers: {},
});

export const {
  /**actions */
} = foodSlice.actions;
export default foodSlice.reducer;
