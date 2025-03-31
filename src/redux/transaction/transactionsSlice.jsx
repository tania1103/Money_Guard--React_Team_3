import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createTransactionThunk,
  getTransactionsThunk,
  updateTransactionThunk,
  deleteTransactionThunk,
  getTransactionCategoriesThunk,
} from './transactionOperations';

const initialState = {
  items: [],
  categories: [],
  isLoading: false,
  isError: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(createTransactionThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isError = null;
      })
      .addCase(getTransactionsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isError = null;
      })
      .addCase(updateTransactionThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.isError = null;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(getTransactionCategoriesThunk.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addMatcher(
        isAnyOf(
          createTransactionThunk.pending,
          getTransactionsThunk.pending,
          updateTransactionThunk.pending,
          deleteTransactionThunk.pending,
          getTransactionCategoriesThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          createTransactionThunk.fulfilled,
          getTransactionsThunk.fulfilled,
          updateTransactionThunk.fulfilled,
          deleteTransactionThunk.fulfilled,
          getTransactionCategoriesThunk.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          createTransactionThunk.rejected,
          getTransactionsThunk.rejected,
          updateTransactionThunk.rejected,
          deleteTransactionThunk.rejected,
          getTransactionCategoriesThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
