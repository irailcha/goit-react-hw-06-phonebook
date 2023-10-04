import { configureStore, combineReducers} from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsSlice);

const reducer = combineReducers({
  contacts: persistedReducer,
  filter: filterSlice,
});
export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);








