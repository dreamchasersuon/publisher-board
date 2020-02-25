import { createSlice } from '@reduxjs/toolkit';

const success = createSlice({
  name: 'success',
  initialState: [],
  reducers: {
    setSuccessMessage(state, action) {
      const { message } = action.payload;
      state.push(message);
    },
    removeSuccessMessage(state) {
      if (state.length === 1) {
        return [];
      }
      state.filter((message, i) => message[i] !== 0);
    },
  },
});

export const { setSuccessMessage, removeSuccessMessage } = success.actions;
export default success.reducer;
