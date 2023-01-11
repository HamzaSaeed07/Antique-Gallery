import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './reducers/auth';
import globalReducer from './reducers/global';
import { api } from '../api';
export const store = configureStore({
  reducer: {
    authReducer,
    globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefault => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
