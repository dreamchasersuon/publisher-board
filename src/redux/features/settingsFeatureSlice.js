import { createSlice } from '@reduxjs/toolkit';

const settings = createSlice({
  name: 'settings',
  initialState: {
    user: null,
    isRefresh: false,
    transactions: [],
  },
  reducers: {
    setActiveUser(state, action) {
      const { user } = action.payload;
      state.user = user;
    },
    setTransactions(state, action) {
      const { transactions } = action.payload;
      state.transactions = transactions;
    },
    setIsRefresh(state, action) {
      const { refresh } = action.payload;
      state.isRefresh = refresh;
    },
  },
});

export const {
  setActiveUser,
  setTransactions,
  setIsRefresh,
} = settings.actions;
export default settings.reducer;
