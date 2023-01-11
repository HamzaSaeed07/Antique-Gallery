import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeUser: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
    logout: state => {
      localStorage.removeItem('user');
      state.activeUser = null;
    },
  },
});

export const { setActiveUser, logout } = authReducer.actions;

export default authReducer.reducer;
