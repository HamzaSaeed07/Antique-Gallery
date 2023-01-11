import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNumber: 1,
};

const global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { changeCurrentPage } = global.actions;

export default global.reducer;
