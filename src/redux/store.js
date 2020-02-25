import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['settings'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // fixes https://github.com/rt2zz/redux-persist/issues/988
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
