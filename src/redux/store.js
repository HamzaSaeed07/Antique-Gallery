import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './reducers/auth';
import globalReducer from './reducers/global';
import { api } from '../api';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // if you do not want to persist this part of the state
  blacklist: [api.reducerPath],
};
const reducer = combineReducers({
  authReducer,
  globalReducer,
  [api.reducerPath]: api.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   authReducer,
  //   globalReducer,
  //   [api.reducerPath]: api.reducer,
  // },
  middleware: getDefault =>
    getDefault({
      serializableCheck: false,
    }).concat(api.middleware),
});
setupListeners(store.dispatch);
