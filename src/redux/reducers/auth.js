import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeUser: {},
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const { setActiveUser } = authReducer.actions;

export default authReducer.reducer;
