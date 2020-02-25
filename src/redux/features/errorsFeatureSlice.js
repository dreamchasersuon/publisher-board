import { createSlice } from '@reduxjs/toolkit';

const errors = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
    setError(state, action) {
      const { e } = action.payload;
      state.push(e);
    },
    removeError(state) {
      if (state.length === 1) {
        return [];
      }
      state.filter((e, i) => e[i] !== 0);
    },
  },
});

export const { setError, removeError } = errors.actions;
export default errors.reducer;
