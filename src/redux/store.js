import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { transactionsReducer } from './transaction/transactionsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token', 'user'],
};

const transactionsPersistConfig = {
  key: 'transactions',
  storage,
  whitelist: ['items'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedTransactionsReducer = persistReducer(
  transactionsPersistConfig,
  transactionsReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: persistedTransactionsReducer, // reducerul pentru tranzactii
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
